import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { selectToken, selectAuthentificated } from 'redux/authReducer';
import { refreshUserThunk } from 'redux/operation';
import { Loader } from './Loader/Loader';

import PrivateRoute from './PrivateRoute/PrivateRoute';
// import ContactsPage from 'pages/ContactsPage';
// import WelcomePage from 'pages/WelcomePage';
// import LoginPage from 'pages/LoginPage';
// import RegistrationPage from 'pages/RegistrationPage';
// import SuccessfulRegistrationPage from 'pages/SuccessfulRegistrationPage';
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const WelcomePage = lazy(() => import('pages/WelcomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const SuccessfulRegistrationPage = lazy(() =>
  import('pages/SuccessfulRegistrationPage')
);
// const MyComponent = lazy(() => import('path/to/MyComponent'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
    
  }, [token, dispatch, authentificated]);

  return (
    <Suspense fallback={<Loader/>}><Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/successful-register' element={<SuccessfulRegistrationPage/>} />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login">
            <ContactsPage />
         </PrivateRoute>
        }
      />
    </Routes></Suspense>
    
  );
};
