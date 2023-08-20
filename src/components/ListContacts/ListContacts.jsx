import * as React from 'react';
import { PropTypes } from 'prop-types';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const ListContacts = ({ contacts, deleteContact }) => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <div style={{ margin: '60px' }}>
      {showContacts && (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={event => setSecondary(event.target.checked)}
                />
              }
              label="Show number"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dense}
                  onChange={event => setDense(event.target.checked)}
                />
              }
              label="Smart mode"
            />
          </FormGroup>
          <Grid container spacing={4}>
            <Grid item xs={18} md={30}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Your contacts list
              </Typography>
              <Demo>
                <List dense={dense}>
                  {contacts.map(({ id, name, number }) => (
                    <ListItem
                      key={id}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => deleteContact(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <PermContactCalendarIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={name}
                        secondary={secondary ? number : null}
                      />
                    </ListItem>
                  ))}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};


ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
