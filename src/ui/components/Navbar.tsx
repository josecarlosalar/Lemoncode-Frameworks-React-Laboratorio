import React, { useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/router';
import { ProfileContext } from '@/core/profile';
import DataObjectIcon from '@mui/icons-material/DataObject';


export const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const { userName } = React.useContext(ProfileContext);
    const organizacion = "Lemoncode";
    const page = "1";

    const onLogout = () => {
        navigate('/', {
            replace: true
        });
    }

    const gitHub = () => {
        navigate(routes.list(organizacion));
    }

    const rickMorty = () => {
        navigate(routes.rickmorty);
    }

    const gallery = () => {
        navigate(routes.gallery(page));
    }

    useEffect(()=>{
        if (userName.length==0) {
            navigate(routes.root);
        }
    },[userName])

    return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <DataObjectIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Lab. React Lemoncode
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        <Button onClick={gitHub} color="inherit">GitHub</Button>
                        <Button onClick={rickMorty} color="inherit">Rick & Morty</Button>
                        <Button onClick={gallery} color="inherit">Gallery</Button>
                    </Box>
                    <Typography color="inherit">User: {userName} | </Typography>
                    <Button onClick={onLogout} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}

