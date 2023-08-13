import { useDispatch, useSelector } from 'react-redux';

import { FormContact } from 'components/FormContact/FormContact';
import { Header } from 'components/Header/Header';
import { addContactThunk, selectContactsIsLoading, selectUserContacts } from 'redux/contactsReduser';
import { ListContacts } from 'components/ListContacts/ListContacts';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts)
  // const isLoading = useSelector(selectContactsIsLoading)

  const onSubmit = data => { 
    console.log(data)
    dispatch(addContactThunk(data));

  };

  return (
    <div>
      <Header />
      <p>contactpage</p>
      <FormContact onSubmit={onSubmit} />
      {/* <ListContacts /> */}
    </div>
  );
  // <div>
  //   <Header />
  //   <h1> Phonebook</h1>
  //   <FormContact />
  //   {/* <h2>Contacts</h2> */}
  //   <Filter />
  //   <ListContacts />
  // </div>
  // );
};

export default ContactsPage;
