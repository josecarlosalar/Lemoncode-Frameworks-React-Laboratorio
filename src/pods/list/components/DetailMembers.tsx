import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from "@/router";
import classes from "../list.styles.css";
import { CenterLayout } from '@/layout';

export const DetailMembers = (props) => {

const { users, id, organizacion } = props;
    
  return (
    <>
        <Card className={classes.sombraImg} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="240"
                image={users.avatar}
                alt={users.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {users.name}
                </Typography>
                <Typography sx={{fontWeight: 'bold'}} variant="body2">
                    User Id:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {id}
                </Typography>
                <Divider />
                <Typography sx={{fontWeight: 'bold'}} variant="body2">
                    Company:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {organizacion}
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary">
                    {users.location}
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary">

                    {users.repos_url}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={routes.list(organizacion)}>Back to list page</Link>
            </CardActions>
        </Card>
    </>
  )
}
