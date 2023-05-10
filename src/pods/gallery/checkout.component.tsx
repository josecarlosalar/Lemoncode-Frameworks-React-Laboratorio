import { TicketBuyContext } from '@/core/ticketBuy';
import { AppLayout } from '@/layout';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Container, Grid, Button, Divider } from '@mui/material';
import React, { useContext } from 'react';
import classes from './image.styles.css';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/router';

export const CheckoutComponent = () => {
  
const { ticketBuy } = useContext(TicketBuyContext);
const navigate = useNavigate();

  return (
    <AppLayout>
        <Grid className={classes.gridTable} container spacing={2}>
          <Grid item xs={12}>
            <h1 className={classes.titleCheckout} >Ticket de compra</h1>
          </Grid>
          <Grid className={classes.buttonBuy} item xs={12}>
            <Button onClick={()=>navigate(routes.gracias)} variant="contained" color="success">
                Comprar
            </Button>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Grid item xs={12}>
                  <h2>Datos de contacto:</h2>
                  <p>John Doe</p>
                  <p>Avenida sin número</p>
                  <p>Ningún lugar</p>
              </Grid>
              <Grid item xs={12}>
                  <h2>Dirección de envío:</h2>
                  <p>John Doe</p>
                  <p>Avenida sin número</p>
                  <p>Ningún lugar</p>
              </Grid>
            </Grid>
            <Grid item xs={9} className={classes.gridTable}>
              <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Image</TableCell>
                      <TableCell align="center">Id</TableCell>
                      <TableCell align="center">Title</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {ticketBuy.map((image)=>(
                      <TableRow
                        key={image.id}
                      >
                        <TableCell align="center"><img className={classes.imageRow} src={image.picUrl} /></TableCell>
                        <TableCell align="center">{image.id}</TableCell>
                        <TableCell className={classes.tableRow} align="center">{image.title}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
    </AppLayout>
  )
}
