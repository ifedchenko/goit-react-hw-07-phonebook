import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/selectors';
import { DeleteButton, List, ListItem, P } from './Contact.styled';
import Loader from 'components/Loader/Loader';

const Contact = () => {
  const [isLoaderShown, setIsLoaderShown] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    setIsLoaderShown(true);
    dispatch(fetchContacts())
      .then(() => {
        setIsLoaderShown(false);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setIsLoaderShown(false);
      });
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoaderShown ? (
        <Loader /> // Render the loader if isLoaderShown is true
      ) : (
        <List>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, phone }) => (
              <ListItem key={id}>
                <P>
                  {name}: {phone}
                  <DeleteButton
                    type="button"
                    onClick={() => handleDeleteContact(id)}
                  >
                    Delete
                  </DeleteButton>
                </P>
              </ListItem>
            ))}
        </List>
      )}
    </>
  );
};

export default Contact;
