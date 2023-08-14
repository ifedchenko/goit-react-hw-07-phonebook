import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import { FormBody, Label, Input, AddContactBtn } from './Form.styled';
import { AddButtonLoader } from 'components/Loader/Loader';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const contactsStorage = useSelector(getContacts);

  const addNewContact = (id, name, phone) => {
    setIsLoading(true);
    const isContactExist = contactsStorage.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isContactExist) {
      dispatch(addContact({ id, name, phone }));
      Notiflix.Notify.success(`You added contact wit name "${name}"`);
      setIsLoading(false);

      return;
    } else {
      Notiflix.Notify.failure(`This name ${name} already exists!`);
      setIsLoading(false);

      return;
    }
  };

  const submitHandler = evt => {
    evt.preventDefault();
    const id = nanoid();
    addNewContact(id, name, phone);
    setName('');
    setPhone('');
  };

  const onInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setPhone(value);
    }
  };

  return (
    <FormBody onSubmit={submitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={phone.trim()}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </Label>
      <AddContactBtn type="submit">
        {isLoading ? <AddButtonLoader /> : 'Add contact'}
      </AddContactBtn>
    </FormBody>
  );
};

export default Form;
