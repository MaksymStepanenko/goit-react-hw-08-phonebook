import Footer from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SuccessfulRegistrationPage = ({ userName }) => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    return navigate('/contacts');
  };

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
            {userName}, thanks for registering, now you can create your contact
            list that you will never lose. enter the name and number and add to
            the list.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={navigateToContacts}>
              let's create a contacts list
            </Button>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default SuccessfulRegistrationPage;
