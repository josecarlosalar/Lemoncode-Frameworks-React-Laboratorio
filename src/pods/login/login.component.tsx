import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardMedia, Grid } from "@mui/material";
import  logo  from "../../assets/images/logo-login.png";
import { routes } from "@/router";
import { CenterLayout } from "@/layout/center.layout";
import { ProfileContext } from "@/core/profile";

interface Props {
    onLogin: (username: string, password: string) => void;
  }

const theme = createTheme();

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    if (typeof username === 'string' && typeof password === 'string') {
        onLogin(username, password);
      }
  };

  return (
    <CenterLayout>
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <CardMedia className="imagen-login"
            component="img"
            height="600"
            image={logo} 
            alt="Logo"
          />
          </Grid>
          <Grid item xs={6} style={{ maxHeight: 700, overflow: "auto" }}>
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleNavigation} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          </Box>
          </Grid>
          
        </Grid>
        
      </Container>
        
        
    </ThemeProvider>
     
    </CenterLayout>
  );
};
