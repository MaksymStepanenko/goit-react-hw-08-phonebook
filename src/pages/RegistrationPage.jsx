import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { registerUserThunk } from 'redux/operation';
import { selectAuthentificated } from 'redux/authReducer';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated)
    
    const onSubmit = (data) => {
        console.log(data)
        dispatch(registerUserThunk(data));
    }
  
  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h2>registPage</h2>
          <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default RegistrationPage;
