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
import Iguana from "../images/iguana.png"
import Loro from "../images/loro.png"
import Perro from "../images/perro.png"
import Gato from "../images/gato.gif"
import Cabra from "../images/cabra.gif"

dayjs.extend(utc)

function Citas() {
    const [datos, setDatos] = useState([
        { mascota: "Koki", estado: 0, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T15:00").hour()+":"+dayjs("2024-04-17T15:30").minute()+":00", tipo: Iguana, telefono: 3882255664 },
        { mascota: "Muñeca", estado: 0, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Perro, telefono: 3882255664 },
        { mascota: "Ratatuil", estado: 1, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Gato, telefono: 3882255664 },
        { mascota: "Thor", estado: 0, propietario: "Mario", sintomas: "Sin pico", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Loro, telefono: 3882255664 },
        { mascota: "Koki", estado: 1, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Cabra, telefono: 3882255664 },
        { mascota: "Muñeca", estado: 2, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Perro, telefono: 3882255664 },
        { mascota: "Ratatuil", estado: 0, propietario: "Mario", sintomas: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic aperiam alias, at sequi optio ipsa doloribus repellat officiis nostrum asperiores excepturi dolor quidem voluptatibus ea dolores repudiandae tempora aliquam. ", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Iguana, telefono: 3882255664 },
        { mascota: "Thor", estado: 1, propietario: "Mario", sintomas: "Sin pico", fecha: "2024-11-25", hora: dayjs("2024-04-17T08:00").hour(), tipo: Loro, telefono: 3882255664 },
    ])

    console.log(datos);

    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [error, setError] = useState("")
    const [bd, setBd] = useState(false);
    const [input, setInput] = useState({ mascota: "", estado: 0, propietario: "", sintomas: "", fecha: "", hora: "", tipo: "No aplica", telefono: 0 });



    const changeValue = (e) => {
        console.log(e.target);
        /* setInput(prev => ({...prev, fecha:e.$y+"-"+e.$M?.toString().padStart(2,0)+"-"+e.$D?.toString().padStart(2,0),
            mascota:e.target.value
        })) */
        setInput({ ...input, [e.target.name]: e.target.value })

    }


    const handleClickOpen = (e, b) => {
        setOpen(true);
        console.log(bd);
        if (b == true) {
            console.log(e.hora);
            setInput({ mascota: e.mascota, propietario: e.propietario, telefono: e.telefono, fecha: dayjs(e.fecha), hora: dayjs(e.hora), tipo: e.tipo, sintomas: e.sintomas })
            setBd(b)
        }
        setBd(false)
        console.log(input);
    };

    const handleClose = () => {
        setOpen(false);
        setInput({ mascota: "", estado: 0, propietario: "", sintomas: "", fecha: dayjs(dayjs().add(1, 'day')), hora: dayjs('2024-04-17T08:20'), tipo: "No aplica", telefono: 0 })
    };

    const handleClose2=()=>{
        setOpenAlert(false)
    }

    const saveData = () => {
        if (bd == false) {
            setDatos(
                prevValue => [{
                    mascota: input.mascota, propietario: input.propietario, sintomas: input.sintomas,
                    fecha: input.fecha, hora: input.hora, estado: 0, tipo: input.tipo, telefono: input.telefono
                },...prevValue] 
            )
        }
    }


    const validationData = () => {
        if (!input.mascota) {
            setOpenAlert(true)
            setError("Por favor digite el nombre de la mascota")
        }else if (!input.propietario){
            setOpenAlert(true)
            setError("Por favor digite el nombre del propietario")
        }else if (!input.sintomas){
            setOpenAlert(true)
            setError("Por favor digite los sintomas")
        }else if (!input.telefono){
            setOpenAlert(true)
            setError("Por favor digite el telefono")
        }else if (input.tipo=="No aplica" && !input.tipo){
            setOpenAlert(true)
            setError("Por favor digite seleccione el tipo de mascota")
        }else if (!input.fecha){
            setOpenAlert(true)
            setError("Por favor seleccione la fecha")
        }else if (!input.hora){
            setOpenAlert(true)
            setError("Por favor seleccione la hora")
    }else{
        saveData()
    }
}

    return (
        <div id='citas'>
            <div id='contenedor'>
                <h1>Administardor de citas</h1>
            </div>
            <div className='btnAdd'>
                <Button variant="outlined" size="large" color="success" onClick={handleClickOpen}>
                    Agregar cita
                </Button>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <hr id='titulo' />
            </div>
            <div className='fila3'>
                <div className='filtro'>
                    <input style={{ margin: "40px 15px", height: "20px", width: "20px" }} type="radio" id="abierta" name="estado" value="HTML"></input>
                    <label htmlFor="abierta">Abiertas</label><br></br>
                    <hr />
                    <input style={{ margin: "40px 15px", height: "20px", width: "20px" }} type="radio" id="teminada" name="estado" value="CSS"></input>
                    <label htmlFor="terminada">Terminadas</label><br></br>
                    <hr />
                    <input style={{ margin: "40px 15px", height: "20px", width: "20px" }} type="radio" id="anulada" name="estado" value="JavaScript"></input>
                    <label htmlFor="anulada">Anuladas</label>
                </div>
                <div className='cards'>
                    {
                        datos.map((e, i) => {
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
                                    <Typography sx={{ textAlign: "justify" }} gutterBottom variant="body1" component="div">
                                        Fecha: {dayjs(e.fecha).day().toString().padStart(2,"0")+"-"+dayjs(e.fecha).month().toString().padStart(2,"0")+"-"+dayjs(e.fecha).year()} Hora: {dayjs(e.hora).hour().toString().padStart(2,"0")+":"+dayjs(e.hora).minute().toString().padStart(2,"0")+":"+dayjs(e.hora).second().toString().padStart(2,"0")}
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
                                            >
                                                <MenuItem value={0} >
                                                    Abierta
                                                </MenuItem>
                                                <MenuItem value={1}>Terminada</MenuItem>
                                                <MenuItem value={2}>Anulada</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </div>
                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "end", position: "absolute", bottom: "0", right: "0" }}>
                                    <Button variant='outlined' size="small" onClick={() => { handleClickOpen(e, true) }}>📝</Button>
                                    <Button variant='outlined' color='error' size="small">❌</Button>
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
                        />
                        <TextField
                            label="Propietario"
                            name="propietario"
                            size="small"
                            value={input.propietario}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px" }}
                        />

                        <TextField
                            label="Telefono"
                            name="telefono"
                            size="small"
                            value={input.telefono}
                            onChange={changeValue}
                            sx={{ marginBottom: "0px" }}
                        />
                        <div style={{ display: "flex" }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']} sx={{ margin: "10px 0", padding: "10px" }}>
                                    <DatePicker
                                        label="Fecha de cita"
                                        minDate={dayjs().add(1, 'day')}
                                        id="fecha"
                                        
                                        onChange={(value) => setInput({ ...input, fecha: value })}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['TimePicker']} sx={{ margin: "10px 0", marginLeft: "10px", padding: "10px" }}>
                                    <TimePicker label="Basic time picker" id="hora"  
                                         
                                        onChange={(value) => setInput({ ...input,   hora:value})} />
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
                        />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' color="success" onClick={handleClose}>Cerrar</Button>
                    <Button variant='outlined' color="error" autoFocus onClick={validationData}>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose2} anchorOrigin={{ vertical: 'top',
                        horizontal: 'right'}}>
                <Alert
                    onClose={handleClose2}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                    
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Citas