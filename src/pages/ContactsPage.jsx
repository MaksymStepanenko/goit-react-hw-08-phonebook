import { useSelector } from 'react-redux';

import { FormContact } from 'components/FormContact/FormContact';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { selectIsLoading, selectError } from 'redux/contactsSlice';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Header />
      {isLoading && !error && <Loader />}
      <h1> Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
};

export default ContactsPage;