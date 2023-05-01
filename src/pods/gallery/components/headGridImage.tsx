import React, { useContext } from 'react';
import { CartLengthContext } from '@/core/cartLength';
import { routes } from '@/router';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Button, Badge } from '@mui/material';
import classes from '../image.styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
    page: number;
    handleHidden: () => void;
}

export const HeadGridImage = (Props) => {
    const navigate = useNavigate();
    const { cartLength, setCartLength } = useContext(CartLengthContext);
    const { page, handleHidden} = Props;

  return (
    <>
        <div className={classes.headList}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={()=>navigate(routes.gallery("1"))}>Gallery 1</Button>
                <Button onClick={()=>navigate(routes.gallery("2"))}>Gallery 2</Button>
            </ButtonGroup>
            <span className={classes.numGallery}>Gallery {page} </span>
            <Badge className={classes.headBadge} badgeContent={cartLength} color="primary">
                <ShoppingCartIcon onClick={handleHidden} color="action" /> <span>Hide click ={'>'}</span>
            </Badge>
        </div>
    </>
  )
}
