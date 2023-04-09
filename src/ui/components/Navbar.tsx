import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Divider } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ProfileContext } from '@/core/profile';

export const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const { userName } = React.useContext(ProfileContext);

    const onLogout = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Lab. React Lemoncode
                    </Typography>
                    <Typography color="inherit">User: {userName} | </Typography>
                    <Button onClick={onLogout} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}

