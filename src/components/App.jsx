import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from 'redux/authReducer';
import { refreshUserThunk } from 'redux/operation';

import ContactsPage from 'pages/ContactsPage';
import WelcomePage from 'pages/WelcomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};
