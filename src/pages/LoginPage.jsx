import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { loginUserThunk } from 'redux/operation';
import { selectAuthentificated } from 'redux/authReducer';
import { Header } from 'components/Header/Header';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const onSubmit = data => {
    dispatch(loginUserThunk(data));
  };

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <Header/>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
