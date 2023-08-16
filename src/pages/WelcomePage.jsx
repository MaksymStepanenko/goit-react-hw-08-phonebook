import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { selectAuthentificated } from 'redux/authReducer';

const WelcomePage = () => {
  const authenticated = useSelector(selectAuthentificated);

  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>hello, I'm a service for storing your contacts </h1>
      <nav>
        <Link to="/login">Sign IN</Link>
        <Link to="/register">Sign UP</Link>
      </nav>
    </div>
  );
};

export default WelcomePage;
