import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import { Helmet } from 'react-helmet';

const LoginForm = ({ Login, error }: any) => {
  const theme = createTheme();

  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = (e: any) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Logga in</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logga in
          </Typography>
          <Box onSubmit={submitHandler} component="form" sx={{ mt: 1 }}>
            {error ? <Alert severity="error">{error}</Alert> : ''}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Användarnamn"
              autoFocus
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Lösenord"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              endIcon={<LoginIcon />}
              sx={{ mt: 3, mb: 2 }}
            >
              Logga in
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
