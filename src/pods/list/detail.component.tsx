import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Divider, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from "@/router";
import classes from "./list.styles.css";
import { User } from '@/pods';
import { AppLayout } from '@/layout';

interface Props {
    organizacion: string;
    id: string;
    user:User;
}

export const DetailComponent = (Props) => {
const {organizacion, id, user} = Props;

  return (
    <>
    <AppLayout>
      <Container>
        <Grid container spacing={1}>
            <Card className={classes.sombraImg} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="240"
                    image={user?.avatarUrl}
                    alt={user.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user?.name}
                    </Typography>
                    <br/>
                    <Typography sx={{fontWeight: 'bold'}} variant="body2">
                        User Id:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {id}
                    </Typography>
                    <br/>
                    <Typography sx={{fontWeight: 'bold'}} variant="body2">
                        Company:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user?.location}
                    </Typography>
                    <br/>
                    <a target="blank" href={user?.repos_url}>{user?.repos_url}</a> 

                        
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={routes.list(organizacion)}>Back to list page</Link>
                </CardActions>
            </Card>
            </Grid>
        </Container>
    </AppLayout>
    </>
  )
}
