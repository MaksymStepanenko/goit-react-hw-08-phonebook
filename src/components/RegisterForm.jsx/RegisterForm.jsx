export const RegisterForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    onSubmit({
      name,
      email,
      password,
    });
    // dispatch(
    //   registerUserThunk({
    //     name,
    //     email,
    //     password,
    //   })
    // );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input name="userName" type="text" required minLength={3} />
        </label>
        <label>
          email
          <input name="userEmail" type="text" />
        </label>
        <label>
          password
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <button type="submit">LogIN</button>
      </form>
    </div>
  );
};
