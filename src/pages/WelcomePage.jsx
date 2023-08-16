import { Header } from 'components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { selectAuthentificated } from 'redux/authReducer';
import { Copyright } from 'components/Copyright/Copyright';
import  Footer  from 'components/Footer/Footer';

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
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      <Footer />
    </div>
    
  );
};

export default WelcomePage;
