import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectEmail } from 'redux/authReducer';
import { logoutUserThunk } from 'redux/operation';
import { Link } from 'react-router-dom';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export const Header = () => {
  const email = useSelector(selectEmail);
  const authenticated = useSelector(selectAuthentificated);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

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
          {/* <Link href="/" style={linkStyles}>
            <Typography variant="h6">myCONTACTS</Typography>
          </Link> */}
          <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '34' }}>
            myCONTACTS
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {authenticated && (
            <>
              <Typography variant="span">{email}</Typography>
              <IconButton
                size="xl"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
