import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
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
