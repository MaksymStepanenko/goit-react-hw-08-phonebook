import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import ContactsIcon from '@mui/icons-material/Contacts';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const FormContact = ({ onSubmit }) => {
  const defaultTheme = createTheme();
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    onSubmit({
      name,
      number,
    });
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="xs" style={{marginLeft:"50px"}}>
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
      {/* <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="contactName"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label c>
          Number
          <input
            type="tel"
            name="contactNumber"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form> */}
    </div>
  );
};
