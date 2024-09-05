import { useEffect, useState } from "react"
import axios from "axios"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Favoritos() {

  const [bebidasRandon, setBebidasRandom] = useState([])

  const listarBebidasRandom = async () => {
    for (let i = 0; i < 4; i++) {
      try {
        let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        //console.log(res.data.drinks[0]);
        setBebidasRandom(prev => [...prev, res.data.drinks[0]])
        console.log(bebidasRandon);

      } catch (error) {
        throw new Error("Hubo un error", error);
      }
    }

  }

  useEffect(() => {
    listarBebidasRandom()
  }, [])

  return (
    <div>
      <div>

      </div>
    <div className="cardBebidas">
      {
        bebidasRandon.map((e,i) => {
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
                sx={{height:"100%",width:"100%"}}
                image={e.strDrinkThumb}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
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
  )
}
