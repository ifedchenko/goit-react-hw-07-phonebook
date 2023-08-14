import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContacts, getFilter } from '../../redux/selectors';
import { DeleteButton, List, ListItem, P } from './Contact.styled';
import { Loader, DeleteButtonLoader } from 'components/Loader/Loader';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPageDidMount, setIsPageDidMount] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    setIsPageDidMount(true);
    dispatch(fetchContacts())
      .then(() => {
        setIsPageDidMount(false);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setIsPageDidMount(false);
      });
  }, [dispatch]);

  const handleDeleteContact = id => {
    setIsLoading(prevState => ({ ...prevState, [id]: true }));
    dispatch(deleteContact(id))
      .then(() => {
        setIsLoading(prevState => ({ ...prevState, [id]: false }));
        Notiflix.Notify.success('Contact deleted');
      })
      .catch(error => {
        setIsLoading(prevState => ({ ...prevState, [id]: false }));
        console.error('Error deleting contact:', error);
        Notiflix.Notify.failure('Failed to delete contact');
      });
  };

  return (
    <>
      {isPageDidMount ? (
        <Loader />
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
                    {isLoading[id] ? <DeleteButtonLoader /> : 'Delete'}
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
