import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import classes from '../list.styles.css';
import { useDebounce } from 'use-debounce';

interface Props {
    organizationName: string;
    onchangeOrganization: (organizationName: string) => void;
    onSearch: (organizationName: string) => void;
}

export const SearchOrganization: React.FC<Props> = (props) => {
    const { organizationName, onchangeOrganization, onSearch } = props;
    const [organizationDebounce] = useDebounce(organizationName, 1000);
    
    useEffect(()=>{
        onSearch(organizationDebounce);
    },[organizationDebounce]);

    return (
        <>
          <Grid className={classes.containerSearch} container spacing={1}>
            <Grid item xs={8}>
                <TextField 
                    id="outlined-basic" 
                    label="Organization" 
                    variant="outlined" 
                    fullWidth
                    size="small"
                    value={organizationName} onChange={(e) => {
                        onchangeOrganization(e.target.value)
                    }}
                    />
            </Grid>
            <Grid item xs={4}>
                <Button className={classes.search} variant="contained" href="#contained-buttons" onClick={() => {
                    onSearch(organizationDebounce);
                }}>
                    Search
                </Button>
            </Grid>
          </Grid>
        </>
    );
}


