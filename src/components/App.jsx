import { Route, Routes } from 'react-router-dom';

import ContactsPage from 'pages/ContactsPage';
import WelcomePage from 'pages/WelcomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};
