import css from './FormContact.module.css';

export const FormContact = ({onSubmit}) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    onSubmit({
      name,
      number,
    });
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <label className={css.formlabel}>
        Name
        <input
          className={css.forminput}
          type="text"
          name="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.formlabel}>
        Number
        <input
          className={css.forminput}
          type="tel"
          name="contactNumber"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.formbtn}>
        add contact
      </button>
    </form>
  );
};
