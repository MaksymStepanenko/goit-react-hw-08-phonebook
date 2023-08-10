import PropTypes from 'prop-types';

import css from './ListContacts.module.css';

export const ListContacts = () => {



  return (
    <ul className={css.ulwrap}>
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

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};
