import { useEffect, useState } from "react"
import axios from "axios"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';

export default function Favoritos() {

  const [bebidasRandon, setBebidasRandom] = useState([])
  const [cocteles, setCocteles] = useState([])
  const [ordinarias, setOrdinarias] = useState([])
  const [loading, setLoading] = useState(false)

  const listarBebidasRandom = async () => {
    setLoading(true)
    for (let i = 0; i < 3; i++) {
      try {
        let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        //console.log(res.data.drinks[0]);
        setBebidasRandom(prev => [...prev, res.data.drinks[0]])
        console.log(bebidasRandon);

      } catch (error) {
        throw new Error("Hubo un error", error);
      } finally {
        setLoading(false)
      }
    }

  }

  const listarCocteles = async () => {
    try {
      let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      console.log(res.data.drinks);
      for (let i = 0; i < 4; i++) {
        setCocteles(prev => [...prev, res.data.drinks[i]])
      }
      console.log(cocteles);
    } catch (error) {
      throw new Error("Hubo un error", error);
    }
  }

  const listarBebidasOrdinarias = async () => {
    try {
      let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink")
      console.log(res.data.drinks);
      for (let i = 0; i < 4; i++) {
        setOrdinarias(prev => [...prev, res.data.drinks[i]])
      }
      console.log(cocteles);

    } catch (error) {
      throw new Error("Hubo un error", error);
    }

  }


  useEffect(() => {
    listarBebidasRandom()
    listarCocteles()
    listarBebidasOrdinarias()
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Bebidas al azar</h1>
      </div>
      <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
        {/* <div className="cardBebidas1">
        {
          loading ? 
          <CircularProgress color="secondary" />
          :bebidasRandon.map((e, i) => {
            return <div className="bebida" key={i}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {e.strCategory.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={e.strDrink}
                  subheader={e.strCategory}
                />
                <CardMedia
                  component="img"
                  sx={{ height: "100%", width: "100%" }}
                  image={e.strDrinkThumb}
                  alt="Paella dish"
                />
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          })
        }
      </div> */}
        {
          loading ?
            <CircularProgress color="secondary" /> :
            <div className="cardBebidas1">
              {
                bebidasRandon.map((e, i) => {
                  return <div className="bebida" key={i}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {e.strCategory.charAt(0).toUpperCase()}
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={e.strDrink}
                        subheader={e.strCategory}
                      />
                      <CardMedia
                        component="img"
                        sx={{ height: "100%", width: "100%" }}
                        image={e.strDrinkThumb}
                        alt="Paella dish"
                      />
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </div>
                })
              }
            </div>
        }
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Cocteleria</h1>
      </div>
      <div>
        <div className="cardBebidas">
          {
            cocteles.map((e, i) => {
              return <div className="bebida" key={i}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "blue", width: "100%" }} aria-label="recipe" >
                        {e.idDrink}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={e.strDrink}
                  />
                  <CardMedia
                    component="img"
                    sx={{ height: "100%", width: "100%" }}
                    image={e.strDrinkThumb}
                    alt="Paella dish"
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            })
          }
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Bebidas ordinarias</h1>
      </div>
      <div>
        <div className="cardBebidas">
          {
            ordinarias.map((e, i) => {
              return <div className="bebida" key={i}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "blue", width: "100%" }} aria-label="recipe" >
                        {e.idDrink}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={e.strDrink}
                  />
                  <CardMedia
                    component="img"
                    sx={{ height: "100%", width: "100%" }}
                    image={e.strDrinkThumb}
                    alt="Paella dish"
                  />
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
