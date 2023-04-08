import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

interface Props {
    organizationName: string;
    onchangeOrganization: (organizationName: string) => void;
    onSearch: (organizationName: string) => void;
}

export const SearchOrganization: React.FC<Props> = (props) => {
    const { organizationName, onchangeOrganization, onSearch } = props;

    return (
        <>
          <Grid container spacing={1}>
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
                <Button className="search" variant="contained" href="#contained-buttons" onClick={() => {
                    onSearch(organizationName);
                }}>
                    Search
                </Button>
            </Grid>
          </Grid>
        </>
    );
}


