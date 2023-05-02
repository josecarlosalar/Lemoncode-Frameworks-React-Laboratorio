import React, { useEffect, useState } from 'react';
import { Container, Grid, List, Pagination } from '@mui/material';
import { AppLayout } from '@/layout';
import { Search, GridRickMorty, DialogCard, Character } from '@/pods';
import classes from './rick.styles.css';

interface Props {
    characters: Character[];
}

export const RickMortyComponent: React.FC<Props> = ({ characters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);
    const [filteredCharacters, setFilteredCharacters] = React.useState(characters);
    const [selectedCharacter, setSelectedCharacter] = React.useState<Character>();
    const [open, setOpen] = React.useState(false);


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
    
        return  (
            <Grid className={classes.contenedor} container>
                <Grid item xs={12} md={12}>
                    <Search characters={characters} onSearch={handleSearch}/>
                </Grid>
                <Grid className={classes.gridRick} item xs={12} md={12}>
                    <GridRickMorty characters={characters} filteredCharacters={filteredCharacters} currentPage={currentPage} perPage={perPage} handleClickOpen={handleClickOpen}/>
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
                    <DialogCard openProp={open} handleClose={handleClose} selected={selectedCharacter} /> 
                </Container>
            </AppLayout>
        </>
    );
    

}