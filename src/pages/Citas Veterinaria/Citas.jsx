import { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Iguana from "../../images/iguana.png"
import Loro from "../../images/loro.png"
import Perro from "../../images/perro.png"
import Gato from "../../images/gato.gif"
import Cabra from "../../images/cabra.gif"

dayjs.extend(utc)

function Citas() {
    const [datos, setDatos] = useState([
        /*  { mascota: "Koki", estado: 0, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T15:00").hour()+":"+dayjs("2024-04-17T15:30").minute()+":00", tipo: Iguana, telefono: 3882255664 },
         { mascota: "Muñeca", estado: 0, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Perro, telefono: 3882255664 },
         { mascota: "Ratatuil", estado: 1, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Gato, telefono: 3882255664 },
         { mascota: "Thor", estado: 0, propietario: "Mario", sintomas: "Sin pico", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Loro, telefono: 3882255664 },
         { mascota: "Koki", estado: 1, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Cabra, telefono: 3882255664 },
         { mascota: "Muñeca", estado: 2, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Perro, telefono: 3882255664 },
         { mascota: "Ratatuil", estado: 0, propietario: "Mario", sintomas: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic aperiam alias, at sequi optio ipsa doloribus repellat officiis nostrum asperiores excepturi dolor quidem voluptatibus ea dolores repudiandae tempora aliquam. ", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Iguana, telefono: 3882255664 }, 
         { mascota: "Thor", estado: 1, propietario: "Mario", sintomas: "Sin pico", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Loro, telefono: 3882255664 },*/
    ])

    console.log(datos);

    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlert2, setOpenAlert2] = useState(false);
    const [openAlert3, setOpenAlert3] = useState(false);
    const [error, setError] = useState("")
    const [bd, setBd] = useState(false);
    const [input, setInput] = useState({ mascota: "", estado: 0, propietario: "", sintomas: "", fecha: dayjs().add(1, 'day'), hora: dayjs('2022-04-17T15:30'), tipo: "No aplica", telefono: 0 });
    const [id, setId] = useState(null);
    const [estado, setEstado] = useState("0");
    const [filteredDatos, setFilteredDatos] = useState(datos);


    const changeValue = (e) => {
        console.log(e.target);
        /* setInput(prev => ({...prev, fecha:e.$y+"-"+e.$M?.toString().padStart(2,0)+"-"+e.$D?.toString().padStart(2,0),
            mascota:e.target.value
        })) */
        setInput({ ...input, [e.target.name]: e.target.value })

    }


    const handleClickOpen = (e, b, i) => {
        setOpen(true);
        setId(i)
        console.log(e.mascota);
        if (b == true) {
            setInput({
                mascota: e.mascota, propietario: e.propietario, telefono: e.telefono,
                fecha: e.fecha,
                hora: e.hora,
                tipo: e.tipo, sintomas: e.sintomas
            })
            setBd(b)
        }
        console.log(input);
    };

    const deleteData = (i) => {
        console.log(i);
        setOpenAlert3(true)
    }

    const handleClose = () => {
        setOpen(false);
        setInput({ mascota: "", estado: 0, propietario: "", sintomas: "", fecha: dayjs().add(1, 'day'), hora: dayjs().add(1, 'day'), tipo: "No aplica", telefono: 0 })
    };

    const handleClose2 = () => {
        setOpenAlert(false)
    }

    const handleClose3 = () => {
        setOpenAlert2(false)
    }

    const saveData = () => {
        console.log(id);
        if (bd == false) {
            setDatos(
                prevValue => [{
                    mascota: input.mascota, propietario: input.propietario, sintomas: input.sintomas,
                    fecha: input.fecha, hora: input.hora, estado: 0, tipo: input.tipo, telefono: input.telefono
                }, ...prevValue]
            )
            handleClose()
            setOpenAlert2(true)
        } else {
            datos[id].propietario = input.propietario
            datos[id].mascota = input.mascota
            datos[id].sintomas = input.sintomas
            datos[id].fecha = input.fecha
            datos[id].hora = input.hora
            datos[id].tipo = input.tipo
            datos[id].telefono = input.telefono
            setDatos(datos)
            handleClose()
            setOpenAlert2(true)
            setBd(false)
        }


    }

    const cambiarEstado = (valor = "", e = "", i) => {
        console.log(e.estado !== valor.target?.value);
        if (valor.target?.value !== e.estado) {
            let newDatos = [...datos]
            newDatos[i].estado = valor.target?.value
            setDatos(newDatos)
        }
    }


    useEffect(() => {
        cambiarEstado(),
            setFilteredDatos(
                estado === "" ? datos : datos.filter(cita => cita.estado.toString() === estado)
            );
    }, [estado, datos])


    const validationData = () => {
        if (!input.mascota) {
            setOpenAlert(true)
            setError("Por favor digite el nombre de la mascota")
        } else if (!input.propietario) {
            setOpenAlert(true)
            setError("Por favor digite el nombre del propietario")
        } else if (!input.sintomas) {
            setOpenAlert(true)
            setError("Por favor digite los sintomas")
        } else if (!input.telefono) {
            setOpenAlert(true)
            setError("Por favor digite el telefono")
        } else if (input.tipo == "No aplica" && !input.tipo) {
            setOpenAlert(true)
            setError("Por favor digite seleccione el tipo de mascota")
        } else if (!input.fecha) {
            setOpenAlert(true)
            setError("Por favor seleccione la fecha")
        } else if (!input.hora) {
            setOpenAlert(true)
            setError("Por favor seleccione la hora")
        } else {
            saveData()
        }
    }

    return (
        <div id='citas'>
            <div id='contenedor'>
                <h1>Administardor de citas</h1>
            </div>
            <div className='btnAdd'>
                <FormControl sx={{ width: "25%", textAlign: "center" }}>
                    <InputLabel id="demo-select-small-label">Filtrar por estado</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Filtrar por estado"
                        color="primary"
                        value={estado}
                        onChange={(value) => setEstado(value.target.value)}
                    >
                        <MenuItem value="0">
                            Abierta
                        </MenuItem>
                        <MenuItem value="1">Terminada</MenuItem>
                        <MenuItem value="2">Anulada</MenuItem>

                    </Select>
                </FormControl>
                <Button variant="outlined" color="success" onClick={handleClickOpen}>
                    Agregar cita
                </Button>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <hr id='titulo' />
            </div>
            <div className='fila3'>
                {/* <div className='filtro'>
                    <input style={{ margin: "40px 15px", height: "20px", width: "20px" }} type="radio" id="abierta" name="estado" value="HTML"></input>
                    <label htmlFor="abierta">Abiertas</label><br></br>
                    <hr />
                    <input style={{ margin: "40px 15px", height: "20px", width: "20px" }} type="radio" id="teminada" name="estado" value="CSS"></input>
                    <label htmlFor="terminada">Terminadas</label><br></br>
                    <hr />
                    <input style={{ margin: "40px 15px", height: "20px", width: "20px" }} type="radio" id="anulada" name="estado" value="JavaScript"></input>
                    <label htmlFor="anulada">Anuladas</label>
                </div> */}
                <div className='cards'>
                    {
                        filteredDatos.map((e, i) => {
                            return <Card key={i} sx={{ textAlign: "center", position: "relative", overflow: "visible" }}>
                                <img style={{ height: "70px", width: "70px", position: "absolute", top: "-35px", right: "10%" }} src={e.tipo} alt="" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.mascota}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Propietario: {e.propietario}
                                    </Typography>
                                    <Typography sx={{ textAlign: "justify" }} gutterBottom variant="body1" component="div">
                                        Telefono: {e.telefono}
                                    </Typography>
                                    <Typography sx={{ textAlign: "left" }} gutterBottom variant="body1" component="div">
                                        Fecha: {e.fecha.$D + " - "} {parseInt(e.fecha.$M) + 1} {" - " + e.fecha.$y}  Hora: {dayjs(e.hora).hour().toString().padStart(2, "0") + ":" + dayjs(e.hora).minute().toString().padStart(2, "0") + ":" + dayjs(e.hora).second().toString().padStart(2, "0")}
                                    </Typography>

                                    <Typography sx={{ textAlign: "justify" }} variant="body2" color="text.secondary">
                                        Sintomas: {e.sintomas}
                                    </Typography>
                                    <div>
                                        <FormControl sx={{ width: "100%", marginTop: "20px" }}>
                                            <InputLabel id="demo-select-small-label">Estado</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                label="Estado"
                                                color="primary"
                                                value={e.estado}
                                                sx={{ marginBottom: "35px" }}
                                                onChange={(value) => cambiarEstado(value, e, i)}
                                            >
                                                <MenuItem value="0">
                                                    Abierta
                                                </MenuItem>
                                                <MenuItem value="1">Terminada</MenuItem>
                                                <MenuItem value="2">Anulada</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "end", position: "absolute", bottom: "0", right: "0" }}>
                                    <Button variant='outlined' size="small" onClick={() => { handleClickOpen(e, true, i) }}>📝</Button>
                                    <Button variant='outlined' color='error' size="small" onClick={() => { deleteData(i) }}>❌</Button>
                                </CardActions>
                            </Card>
                        })
                    }

                </div>
            </div>
            <div id='footer'>
                <p>Derechos reservados a Jagues6</p>
            </div>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='dialogo'
            >
                <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: "green" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <h3 style={{ margin: "0", color: "white" }}>Guardar nueva cita</h3>
                        <h3 id="cerrar" style={{ margin: "0", color: "white" }} onClick={handleClose}>X</h3>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='formulario'>
                        <TextField
                            label="Nombre Mascota"
                            name="mascota"
                            size="small"
                            value={input.mascota}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px", marginTop: "20px" }}
                            className='caja'
                        />
                        <TextField
                            label="Propietario"
                            name="propietario"
                            size="small"
                            value={input.propietario}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px" }}
                            className='caja'
                        />

                        <TextField
                            label="Telefono"
                            name="telefono"
                            size="small"
                            value={input.telefono}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px" }}
                            className='caja'
                        />
                        <div className='fecha' style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']} sx={{}}>
                                    <DatePicker
                                        className='caja'
                                        label="Fecha de cita"
                                        minDate={dayjs().add(1, 'day')}
                                        id="fecha"
                                        value={input.fecha}
                                        onChange={(value) => setInput({ ...input, fecha: value })}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer className='caja' components={['TimePicker']} sx={{}}>
                                    <TimePicker label="Basic time picker" id="hora" className='caja'
                                        value={input.hora}
                                        onChange={(value) => setInput({ ...input, hora: value })} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                        <FormControl size="small">
                            <InputLabel id="demo-select-small-label">Tipo de mascota</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                name="tipo"
                                label="Tipo de mascota"
                                color="primary"
                                value={input.tipo}
                                onChange={changeValue}
                                sx={{ marginBottom: "10px" }}
                                className='caja'
                            >
                                <MenuItem value="No aplica">
                                    <em>No aplica</em>
                                </MenuItem>
                                <MenuItem value={Perro}>Perro</MenuItem>
                                <MenuItem value={Gato}>Gato</MenuItem>
                                <MenuItem value={Iguana}>Iguana</MenuItem>
                                <MenuItem value={Cabra}>Cabra</MenuItem>
                                <MenuItem value={Loro}>Loro</MenuItem>
                                {/* <MenuItem value={Roedor}>Roedor</MenuItem>
                            <MenuItem value={Oso}>Oso</MenuItem>
                            <MenuItem value={Gallina}>Gallina</MenuItem>
                            <MenuItem value={Loro}>Loro</MenuItem>
                            <MenuItem value={Insecto}>Insecto</MenuItem> */}
                            </Select>
                        </FormControl>
                        <TextField
                            name="sintomas"
                            label="Sintomas"
                            multiline
                            value={input.sintomas}
                            onChange={changeValue}
                            rows={4}
                            sx={{ marginBottom: "10px" }}
                            className='caja'
                        />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' color="error" onClick={handleClose}>Cerrar</Button>
                    <Button variant='outlined' color="success" autoFocus onClick={validationData}>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose2} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}>

                <Alert
                    onClose={handleClose2}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}

                >
                    {error}
                </Alert>
            </Snackbar>
            <Snackbar open={openAlert2} autoHideDuration={3000} onClose={handleClose3} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}>

                <Alert
                    onClose={handleClose3}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}

                >
                    Registro exitoso
                </Alert>
            </Snackbar>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This is a success Alert inside a Snackbar!
                </Alert>
            </Snackbar>
            <Dialog
                open={openAlert3}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Confirmar
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Esta seguro que desea eliminar esta cita?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose4}>
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmationDelete}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Citas