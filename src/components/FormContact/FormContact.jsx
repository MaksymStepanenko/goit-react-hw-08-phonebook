import { useState } from 'react';

import css from './FormContact.module.css';


export const FormContact = () => {

  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');


  // const handleChange = e => {
  //   const { value, name } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setcontactName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  return (
    <form className={css.wrapper}>
      <label className={css.formlabel}>
        Name
        <input
          className={css.forminput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contactName}
          required
        />
      </label>

      <label className={css.formlabel}>
        Number
        <input
          className={css.forminput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
        />
      </label>
      <button type="submit" className={css.formbtn}>
        add contact
      </button>
    </form>
  );
};
