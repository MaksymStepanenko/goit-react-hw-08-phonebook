import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { registerUserThunk } from 'redux/operation';
import { selectAuthentificated } from 'redux/authReducer';
import SuccessfulRegistrationPage from './SuccessfulRegistrationPage';
import { Header } from 'components/Header/Header';
import Footer from 'components/Footer/Footer';


const RegistrationPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const onSubmit = data => {
    setUserName(data.name);
    dispatch(registerUserThunk(data));
  };

  if (authenticated) return <SuccessfulRegistrationPage userName={userName} />;

  return (
    <div>
      <Header />
      <RegisterForm onSubmit={onSubmit} />

      <Footer />
    </div>
  );
};

export default RegistrationPage;
