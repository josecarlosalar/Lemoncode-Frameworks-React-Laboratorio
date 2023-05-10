import React, { useContext, useEffect, useState } from 'react';
import { MaterialesPedidoContext, PedidosContext } from '@/core/pedidos';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';
import { MaterialesPedido, Pedido } from '../pedidos.vm';
import { SelectedPedidoContext } from '@/core/pedidos/selectedPedido.context';
import { ModificarImporteContext } from '@/core/pedidos/modificarImporte.context';
import { NuevoImporteContext } from '@/core/pedidos/newImporte.context';
import { ChangeImporte } from './changeImporte';
import classes from '../pedidos.styles.css';

export const GridMaterialesPedidos = () => {
const { materialesPedido, setMaterialesPedido } = useContext(MaterialesPedidoContext);
const { selectedPedido, setSelectedPedido } = useContext(SelectedPedidoContext);
const { pedido, setPedido } = useContext(PedidosContext);
const { visibleInput, setVisibleInput } = useContext(ModificarImporteContext);
const { nuevoImporte, setNuevoImporte } = useContext(NuevoImporteContext);
const [ filasPedido, setFilasPedido ] = useState<MaterialesPedido[]>([])
const [ estado, setEstado ] = useState<number>(0);
const [ selecFilePedido, setSelecFilePedido ] = useState<number>(0);
const [ datosPedido, setDatosPedido ] = useState<Pedido[]>([]);
const [ pedidoInput, setPedidoInput ] = useState<number>(0);


const loadData = () => {
    const filterMaterialesPedido = materialesPedido.filter((item) => item.pedido == selectedPedido); 
    setFilasPedido(filterMaterialesPedido);
}

const sortList = (data) => {
    return data.sort((a, b) => a.numero - b.numero);
}

const createNewArray = (matPedido, newState) => {
    const filterRestoPedidos = datosPedido.filter((item) => item.numero != matPedido.pedido); 
    const filterSelectedPedido = datosPedido.filter((item) => item.numero == matPedido.pedido); 
    const {numero, proveedor, fecha, importe} = filterSelectedPedido[0];
    const newArrayPedido:Pedido[] = [...filterRestoPedidos, {numero, proveedor, importe, fecha, estado: newState}];
    setPedido(sortList(newArrayPedido))
}

const stateCalculate = (checked, matPedido) => {
        let result = '';
        let newState:number = 0;
        if (checked) {
            newState = estado+(100/filasPedido.length);
            setEstado(newState);
            result='Valido';
        } else {
            newState = estado-(100/filasPedido.length) > 0 ? estado-(100/filasPedido.length) : 0;
            setEstado(newState);
            result='Pendiente';
        }
        createNewArray(matPedido, newState);
        return result;
}

const recuperarEstado = () => {
    if (selectedPedido != 0){
        const filterSelectedPedido = pedido.filter((item) => item.numero == selectedPedido); 
        const { estado } = filterSelectedPedido[0];
        setEstado(estado);
    }
}

const filterMatPedidos = (pedidos, matPedido, newState) => {
    const filterMaterialesPedido = pedidos.filter((item) => item.numero != matPedido.numero); 
    const {numero, pedido, unidades, descripcion, importeUd, selected} = matPedido;
    const newArrayPedido:MaterialesPedido[] = [...filterMaterialesPedido, {numero, pedido, unidades, estado: newState, descripcion, importeUd, selected: !selected}];
    return newArrayPedido;
}

const handleChange = (e, matPedido) => {
    setSelecFilePedido(matPedido.pedido);
    const checked = e.target.checked;
    const newState = stateCalculate(checked, matPedido);
    const array1 = filterMatPedidos(materialesPedido, matPedido, newState);
    setMaterialesPedido(sortList(array1))
    const array2 = filterMatPedidos(filasPedido, matPedido, newState);
    setFilasPedido(sortList(array2));
}

const calcularImporteRows = (rows) => {
    const totalRow = rows.importeUd * rows.unidades;
    return totalRow;
}

const modificarImporte = ()=>{
    const modificarImporte = materialesPedido.filter((item) => item.numero == pedidoInput); 
    const restoFilas = materialesPedido.filter((item) => item.numero != pedidoInput); 
    const {numero, pedido, estado, unidades, descripcion, selected} = modificarImporte[0];
    const newArrayPedido:MaterialesPedido[] = [...restoFilas, {numero, pedido, estado, unidades, descripcion, selected, importeUd: Number(nuevoImporte)}];
    setMaterialesPedido(sortList(newArrayPedido));
    setVisibleInput(false);
    setNuevoImporte(0);
    actualizarImportePedido();
}

const actualizarImportePedido = ()=>{
    const filterMaterialesPedido = filasPedido.filter((item) => item.pedido == selectedPedido);
    const importeTotal = filterMaterialesPedido.reduce((total, item) => {
        return total + (item.importeUd * item.unidades);
    }, 0);
    const filterSelectedPedido = datosPedido.filter((item) => item.numero == selectedPedido); 
    const filterRestoPedidos = datosPedido.filter((item) => item.numero != selectedPedido); 
    const {numero, proveedor, fecha, estado} = filterSelectedPedido[0];
    const newArrayPedido:Pedido[] = [...filterRestoPedidos, {numero, proveedor, importe: Number(importeTotal), fecha, estado}];
    setPedido(sortList(newArrayPedido));
}

const handleChangeImport = (event) => {
    setNuevoImporte(event.target.value);
}

const cancelarNuevoImporte = () => {
    setVisibleInput(false);
    setNuevoImporte(0);
}

const handleClick = (matPedido) => {
    setVisibleInput(true);
    setNuevoImporte(matPedido.importeUd);
    setPedidoInput(matPedido.numero);
    setSelectedPedido(matPedido.pedido);
}

useEffect(()=>{
    setPedido(sortList(pedido));
    setDatosPedido(sortList(pedido));
},[pedido])

useEffect(()=>{
    loadData();
},[selectedPedido])

useEffect(()=>{
    recuperarEstado();
},[filasPedido])

useEffect(()=>{
    loadData();
},[materialesPedido])


  return (
    <>
        <ChangeImporte nuevoImporte={nuevoImporte} handleChangeImport={handleChangeImport} modificarImporte={modificarImporte} cancelarNuevoImporte={cancelarNuevoImporte} />
        
        <TableContainer  component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell align="center">Unidades</TableCell>
                    <TableCell align="center">Descripción</TableCell>
                    <TableCell align="center">Importe Ud</TableCell>
                    <TableCell align="center">Total Row</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {filasPedido.map((matPedido)=>(
                    <TableRow
                    key={matPedido.numero}
                    >
                        <TableCell className={classes.cell} align="center">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={matPedido.selected} onChange={(e) => handleChange(e, matPedido)} />} label={''} />
                            </FormGroup>
                        </TableCell>
                        <TableCell className={classes.cell} align="center">{matPedido.estado}</TableCell>
                        <TableCell className={classes.cell} align="center">{matPedido.unidades}</TableCell>
                        <TableCell className={classes.cell} align="center">{matPedido.descripcion}</TableCell>
                        <TableCell className={classes.cell} align="center">{matPedido.importeUd.toFixed()}</TableCell>
                        <TableCell className={classes.cell} align="center">{calcularImporteRows(matPedido).toFixed()}</TableCell>
                        <TableCell className={classes.cell} align="center">
                            <Button variant="contained" onClick={() => handleClick(matPedido)}>
                                Editar Importe
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
