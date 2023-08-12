import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact as deleteContactStorage } from "../../redux/slice";
import { getContacts, getFilter } from '../../redux/selectors';
import { DeleteButton, List, ListItem, P } from './Contact.styled';

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContactStorage(id));
  };

  return (
    <>
      <List>
        {contacts
          .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
          .map(({ id, name, number }) => (
            <ListItem key={id}>
              <P>
                {name}: {number}
                <DeleteButton type="button" onClick={() => handleDeleteContact(id)}>
                  Delete
                </DeleteButton>
              </P>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default Contact;
