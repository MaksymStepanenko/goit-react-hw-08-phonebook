import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { loginUserThunk } from 'redux/operation';
import { selectAuthentificated } from 'redux/authReducer';
import { selectContactsError } from 'redux/contactsReducer';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);
  const error = useSelector(selectContactsError);

  const onSubmit = data => {
    console.log(data);
    dispatch(loginUserThunk(data));
  };

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>loginPage</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
