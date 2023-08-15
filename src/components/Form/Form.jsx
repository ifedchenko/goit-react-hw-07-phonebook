import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import { FormBody, Label, Input, AddContactBtn } from './Form.styled';
import { ButtonLoader } from 'components/Loader/Loader';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const contactsStorage = useSelector(getContacts);

  const addNewContact = (name, phone) => {
    const isContactExist = contactsStorage.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExist) {
      setIsLoading(true);

      // const id = nanoid();
      dispatch(addContact({ name, phone }))
        .then(() => {
          Notiflix.Notify.success(`You added contact with name "${name}"`);
          setName('');
          setPhone('');
        })
        .catch(error => {
          console.log('Error:', error);
          Notiflix.Notify.failure('Contact could not be added');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      Notiflix.Notify.failure(`The name "${name}" already exists!`);
    }
  };

  const submitHandler = evt => {
    evt.preventDefault();
    addNewContact(name, phone);
  };

  const onInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
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
          name="phone"
          value={phone.trim()}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </Label>
      <AddContactBtn type="submit">
        {isLoading ? <ButtonLoader height="18" width="18" /> : 'Add contact'}
      </AddContactBtn>
    </FormBody>
  );
};

export default Form;
