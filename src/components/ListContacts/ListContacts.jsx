import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContactThunk } from 'redux/contactsReduser';
import { selectUserContacts } from 'redux/contactsReduser';
import css from './ListContacts.module.css';

export const ListContacts = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  
  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <ul className={css.ulwrap}>
      {showContacts &&
        contacts.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              <p>
                {name} : {phone}
              </p>
              <button
                className={css.btn}
                type="button"
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      {/* {filteredContacts.map(({ name, phone, id }) => {
        return (
          <li key={id} className={css.list}>
            <p>
              {name} : {phone}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })} */}
    </ul>
  );
};

// ListContacts.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.string),
//   onDeleteContact: PropTypes.func,
// };
