import React from 'react';
import { Pedido } from '../pedidos.vm';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import classes from '../pedidos.styles.css';

interface Props {
    pedidos: Pedido[];
    handleRow: ()=> void;
}

export const GridPedidos = (Props) => {
const { pedidos, handleRow } = Props; 

  return (
    <>
        <TableContainer  component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Número</TableCell>
                    <TableCell align="center">Proveedor</TableCell>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">Estado</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {pedidos.map((pedido)=>(
                    <TableRow
                    key={pedido.numero} onClick={()=>handleRow(pedido)}
                    >
                    <TableCell className={classes.cell} align="center">{pedido.numero}</TableCell>
                    <TableCell className={classes.cell} align="center">{pedido.proveedor}</TableCell>
                    <TableCell className={classes.cell} align="center">{pedido.fecha}</TableCell>
                    <TableCell className={classes.cell} align="center">{pedido.estado?.toFixed()}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
