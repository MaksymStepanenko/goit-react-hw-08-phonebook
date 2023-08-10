import { useDispatch } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm.jsx/RegisterForm';
import { registerUserThunk } from 'redux/operation';

const RegistrationPage = () => {
    const dispatch = useDispatch();
    
    const onSubmit = (data) => {
        console.log(data)
        dispatch(registerUserThunk(data));
    }

  return (
    <div>
      <h2>registPage</h2>
          <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default RegistrationPage;
