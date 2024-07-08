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
        { mascota: "Koki", estado: 0, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Iguana, telefono: 3882255664 },
        { mascota: "Muñeca", estado: 0, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Perro, telefono: 3882255664 },
        { mascota: "Ratatuil", estado: 1, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Gato, telefono: 3882255664 },
        { mascota: "Thor", estado: 0, propietario: "Mario", sintomas: "Sin pico", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Loro, telefono: 3882255664 },
        { mascota: "Koki", estado: 1, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Cabra, telefono: 3882255664 },
        { mascota: "Muñeca", estado: 2, propietario: "Mario", sintomas: "Dolor en el lomo", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Perro, telefono: 3882255664 },
        { mascota: "Ratatuil", estado: 0, propietario: "Mario", sintomas: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic aperiam alias, at sequi optio ipsa doloribus repellat officiis nostrum asperiores excepturi dolor quidem voluptatibus ea dolores repudiandae tempora aliquam. ", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Iguana, telefono: 3882255664 },
        { mascota: "Thor", estado: 1, propietario: "Mario", sintomas: "Sin pico", fecha: "2024-11-25", hora: "12:20 p.m", tipo: Loro, telefono: 3882255664 },
    ])

    const [open, setOpen] = useState(false);
    const [bd, setBd] = useState(false);
    const [input, setInput] = useState({ mascota: "", estado: 0, propietario: "", sintomas: "", fecha: dayjs('2024-04-17'), hora: "", tipo: "No aplica", telefono: 0 });

    const changeValue = (e) => {
        console.log(e);
        /* setInput(prev => ({...prev, fecha:e.$y+"-"+e.$M?.toString().padStart(2,0)+"-"+e.$D?.toString().padStart(2,0),
            mascota:e.target.value
        })) */
        setInput({ ...input, [e.target.id]: e.target.value })
        //console.log(input);
    }


    const handleClickOpen = (e, b) => {
        setOpen(true);
        
        console.log(e);
        setBd(b)
        console.log(bd);
        if (b == true) {
            console.log(e.fecha);
            setInput({ mascota: e.mascota, propietario: e.propietario, telefono: e.telefono, fecha: dayjs(e.fecha), hora: e.hora, tipo: e.tipo, sintomas: e.sintomas })
        }
        setBd(false)
        
    };

    const handleClose = () => {
        setOpen(false);
        setInput({ mascota: "", estado: 0, propietario: "", sintomas: "", fecha: dayjs('2024-04-17'), hora: "", tipo: "No aplica", telefono: 0 })
    };

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
                                        Fecha: {e.fecha} Hora: {e.hora}
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
                            id="mascota"
                            size="small"
                            value={input.mascota}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px", marginTop: "20px" }}
                        />
                        <TextField
                            label="Propietario"
                            id="propietario"
                            size="small"
                            value={input.propietario}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px" }}
                        />

                        <TextField
                            label="Telefono"
                            id="telefono"
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
                                        id="fecha"
                                        value={input.fecha}
                                        onChange={(value) => setInput({ ...input, fecha: value.$y.toString() + "-" + value.$M.toString() + "-" + value.$D.toString() })}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['TimePicker']} sx={{ margin: "10px 0", marginLeft: "10px", padding: "10px" }}>
                                    <TimePicker label="Basic time picker" id="hora" onChange={changeValue} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>


                        <TextField
                            label="Telefono"
                            id="outlined-size-small"
                            size="small"
                            value={input.telefono}
                            onChange={changeValue}
                            sx={{ marginBottom: "10px" }}
                        />
                        <FormControl size="small">
                            <InputLabel id="demo-select-small-label">Tipo de mascota</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Tipo"
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
                            id="outlined-multiline-static"
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
                    <Button variant='outlined' color="error" autoFocus>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Citas