import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from "../../redux/slice";
import { getContacts } from '../../redux/selectors';
import { FormBody, Label, Input, AddContactBtn } from './Form.styled';

const Form = () =>  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsStorage = useSelector(getContacts);

  const addNewContact = (id, name, number) => {
    const isContactExist = contactsStorage.some(contact =>
      contact.name && contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExist) {
      dispatch(addContact({ id, name, number }));
      setName('');
      setNumber('');
    } else {
      alert(`This ${name} already exists!`);
    }
  };

  const submitHandler = evt => {
    evt.preventDefault();
    const id = nanoid();
    addNewContact(id, name, number);
  };

  const onInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
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
          value={number.trim()}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </Label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </FormBody>
  );
};

export default Form;
