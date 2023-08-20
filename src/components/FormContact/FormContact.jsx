import * as React from 'react';
import { PropTypes } from 'prop-types';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import ContactsIcon from '@mui/icons-material/Contacts';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const FormContact = ({ onSubmit }) => {
  const defaultTheme = createTheme();

  const [contactName, setContactName] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    onSubmit({
      name,
      number,
    });

    setContactName('');
    setContactNumber('');
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="xs" style={{ marginLeft: '50px' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <ContactsIcon />
            </Avatar>
            <Typography component="h2" variant="h5">
              Enter name and number
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="contactName"
                label="Name"
                name="contactName"
                autoFocus
                value={contactName}
                onChange={e => setContactName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="contactNumber"
                label="Number"
                type="text"
                id="contactNumber"
                autoComplete="tel"
                minLength={7}
                value={contactNumber}
                onChange={e => setContactNumber(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                add contact
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

FormContact.propTypes = {
  onSubmit: PropTypes.func,
};