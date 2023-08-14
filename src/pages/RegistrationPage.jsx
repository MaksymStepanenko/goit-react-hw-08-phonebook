import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { registerUserThunk } from 'redux/operation';
import { selectAuthentificated } from 'redux/authReducer';
import SuccessfulRegistrationPage from './SuccessfulRegistrationPage';


const RegistrationPage = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated)
    
  const onSubmit = (data) => {
        setUserName(data.name)
        dispatch(registerUserThunk(data));
    }
  
  if (authenticated) return <SuccessfulRegistrationPage userName={userName} />;

  return (
    <div>
      <h2>registPage</h2>
          <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default RegistrationPage;
