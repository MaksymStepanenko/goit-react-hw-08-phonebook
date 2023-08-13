export const LoginForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    onSubmit({
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
