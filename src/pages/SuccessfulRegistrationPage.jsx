import { Header } from "components/Header/Header"
import { useNavigate } from 'react-router-dom';

const SuccessfulRegistrationPage = ({ userName }) => {
    
    const navigate = useNavigate();

    const navigateToContacts = () => {
        return navigate('/contacts');
    }


    return (
        <div>
            <Header />
            <p>{userName}, successful</p>
            <button onClick={navigateToContacts}>my CONTACTS</button>           
      </div>
  )
}

export default SuccessfulRegistrationPage