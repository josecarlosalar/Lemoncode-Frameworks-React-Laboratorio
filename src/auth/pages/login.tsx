import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { createClient } from 'pexels';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardMedia, Grid } from "@mui/material";
import  logo  from "../../assets/images/logo-login.png";
import { routes } from "@/router";
import { CenterLayout } from "@/layout/center.layout";

// const client = createClient('l0LGpk9VJut8yAoX6HVI8TXG4c2dmfPQY65Cq4NcVtl0IvyGQvt2oP0o');
// const query = 'Nature';
// client.photos.search({ query, per_page: 1 }).then(photos => {console.log(photos)});

const theme = createTheme();

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const organizacion = "Lemoncode";

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = data.get('username');
    const password = data.get('password');

    if (user === "admin" && password === "test") {
      navigate(routes.list(organizacion));
    } else {
      alert("User / password not valid, psst... admin / test");
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
