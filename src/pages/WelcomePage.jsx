import { Header } from 'components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
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

import { selectAuthentificated } from 'redux/authReducer';
import { Copyright } from 'components/Copyright/Copyright';




const WelcomePage = () => {
  const authenticated = useSelector(selectAuthentificated);


  if (authenticated) return <Navigate to="/contacts" />;

  return (
    <div>
      <Header />
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            myContacts
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            hello, I'm a service for storing contacts, register or log in to use
            the service
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" to="/login" component={Link}>
              Sign IN
            </Button>
            <Button variant="outlined" to="/register" component={Link}>
              Sign UP
            </Button>
          </Stack>
        </Container>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      {/* <div className="background-image"></div>
      <h1>hello, I'm a service for storing your contacts </h1>
      <nav>
        <Link to="/login">Sign IN</Link>
        <Link to="/register">Sign UP</Link>
      </nav> */}
    </div>
  );
};

export default WelcomePage;
