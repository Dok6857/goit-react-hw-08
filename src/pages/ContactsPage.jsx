import { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { fetchContacts } from '../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

const styles = {
  CPcontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  }
}

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.CPcontainer}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
