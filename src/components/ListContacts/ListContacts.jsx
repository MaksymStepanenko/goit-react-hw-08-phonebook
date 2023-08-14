import css from './ListContacts.module.css';

export const ListContacts = ({ contacts, deleteContact }) => {


  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <ul className={css.ulwrap}>
      {showContacts &&
        contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name} : {number}
              </p>
              <button
                className={css.btn}
                type="button"
                onClick={() => deleteContact(id)}
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
