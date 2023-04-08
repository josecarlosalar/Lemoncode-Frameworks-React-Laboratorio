import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    Lab. React Lemoncode
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}

