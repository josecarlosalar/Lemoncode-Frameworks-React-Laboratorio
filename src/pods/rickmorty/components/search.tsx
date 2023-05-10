import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import classes from '../rick.styles.css';
import {Character} from '../rick.vm';
import { useDebounce } from 'use-debounce';

interface Props {
    characters: Character[];
    onSearch: (characters: Character[]) => void;
  }

export const Search: React.FC<Props> = (props) => {
    const { characters, onSearch } = props;
    const [name, setName] = React.useState('');
    const [nameDebounce] = useDebounce(name, 1000);
    
    useEffect(()=>{
      handleSearch();
    },[nameDebounce]);

    const handleSearch = () => {
        const filteredCharacters = characters.filter(
          (character) => character.name.toLowerCase().includes(nameDebounce.toLowerCase())
        );
        onSearch(filteredCharacters);
    };

    return (
        <>
          <Grid className={classes.containerSearch} container spacing={1}>
            <Grid item xs={8}>
                <TextField  
                    label="Personaje" 
                    variant="outlined" 
                    fullWidth
                    size="small"
                    onChange={(e) => {
                        setName(e.target.value);
                        
                    }}
                    />
            </Grid>
            <Grid item xs={4}>
                <Button className={classes.search} variant="contained" onClick= {handleSearch}>
                    Search
                </Button>
            </Grid>
          </Grid>
          
        </>
    );
}


