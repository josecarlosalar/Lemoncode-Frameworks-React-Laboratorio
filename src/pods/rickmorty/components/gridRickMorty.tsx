import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Character } from '@/pods';
import classes from '../rick.styles.css';

interface Props {
    filteredCharacters: Character;
    currentPage: Number;
    perPage: Number;
    handleCliclOpen: ()=>void;
}

export const GridRickMorty = (Props) => {
    const { currentPage, perPage, handleClickOpen, filteredCharacters } = Props;
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;




    return (
        <>
            {filteredCharacters.slice(startIndex, endIndex).map((filteredCharacter) => (
                <Grid className={classes.gridCard} key={filteredCharacter.id} item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 245 }} className={classes.card} onClick={()=>handleClickOpen(filteredCharacter)}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="150"
                            image={filteredCharacter.image}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6">
                                {filteredCharacter.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {filteredCharacter.status} - {filteredCharacter.species}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                ))
            }
        </>
    )
}
