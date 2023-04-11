import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '@/core/profile';
import DataObjectIcon from '@mui/icons-material/DataObject';

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
                    <DataObjectIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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

