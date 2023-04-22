import React, { useEffect, useState } from 'react';
import { Character } from './rick.vm';
import { AppLayout } from '@/layout';
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, Pagination, Typography } from '@mui/material';
import { Search } from './components/search';
import classes from './rick.styles.css';

interface Props {
    characters: Character[];
}


export const RickMortyComponent: React.FC<Props> = ({ characters }) => {
    const [filteredCharacters, setFilteredCharacters] = React.useState(characters);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);
    const [open, setOpen] = React.useState(false);
    const [selectedCharacter, setSelectedCharacter] = React.useState<Character>();

    const handleClickOpen = (character: Character) => {
      setOpen(true);
      setSelectedCharacter(character);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        handleSearch(characters);
    },[characters]);

    const handleSearch = (characters: Character[]) => {
      setFilteredCharacters(characters);
    };

    const renderListItems = () => {
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;

        return  (
            <Grid className={classes.contenedor} container>
                <Grid item xs={12} md={12}>
                    <Search characters={characters} onSearch={handleSearch}/>
                </Grid>
                <Grid className={classes.gridRick} item xs={12} md={12}>
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
                </Grid>
            </Grid>
        );
    };

    return (
        <>
            <AppLayout>
                <Container>
                    <List>
                        {renderListItems()}
                    </List>
                    
                    <Pagination
                        count={Math.ceil(filteredCharacters.length / perPage)}
                        page={currentPage}
                        onChange={(event, page) => setCurrentPage(page)}
                        showFirstButton
                        showLastButton
                        color="primary"
                    />
                        <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {selectedCharacter?.status} - {selectedCharacter?.species}
                            </DialogTitle>
                            <CardMedia
                                        component="img"
                                        height="350"
                                        image={selectedCharacter?.image}
                                        alt="green iguana"
                                        />
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {selectedCharacter?.name}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>
                                Cerrar
                                </Button>
                            </DialogActions>
                        </Dialog>
                    
                </Container>
            </AppLayout>
        </>
    );
    

}