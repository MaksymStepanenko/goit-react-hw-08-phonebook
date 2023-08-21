import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const authenticated = useSelector(selectAuthentificated)

  return authenticated ? <Navigate to={redirectTo}/> : Component ;
};
