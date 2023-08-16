import { useDispatch, useSelector } from 'react-redux';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { selectAuthentificated } from 'redux/authReducer';
import { logoutUserThunk } from 'redux/operation';

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit', // Зберігаємо спадковий колір тексту
  cursor: 'pointer',
};

const defaultTheme = createTheme();

export const Header = () => {
  const authenticated = useSelector(selectAuthentificated);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ContactPhoneIcon sx={{ mr: 2 }} />
          <Link href="/" style={linkStyles}>
            <Typography variant="h6">myCONTACTS</Typography>
          </Link>
          {authenticated && (
            <div>
              <p>email</p>
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
