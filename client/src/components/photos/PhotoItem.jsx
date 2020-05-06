import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

import PhotoPage from './PhotoPage'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: '100%',
    zIndex: '1',
  },
  media: {
    height:200,
    zIndex: '-1',

  },
  headLine:{
    height:'40px',
  },
  button:{
    textDecoration: 'none',
    marginRight: theme.spacing(3),
    fontSize:"20px",
    color: "#1769aa",
  },
  info:{
    height:'80px',
    width: '80%',
  },
  price:{
    position:'absolute',
    width: '40%',
    left:'-50px',
    transform: 'rotate(-40deg)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    textShadow: '1px black',
    color:'white',
    zIndex: '1',

  }
}))

const PhotoItem = ({image}) => {
          const classes = useStyles();

          const onClick = ()=>{
            return <PhotoPage props={image}/>
          }
          

          return (
            <Fragment>
           {image && <Card className={classes.root}>
              <CardActionArea>
              <h1 className={classes.price}>
                  {image.price}$
                </h1>
                <CardMedia
                  className={classes.media}
                  image={image.src}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className={classes.headLine} gutterBottom variant="h5" component="h2">
                  {image.headLine}
                  </Typography>
                  <Typography  className={classes.info}
                  variant="body2" color="textSecondary" component="p">
                  {image.info}

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Link to={`/photo/${image._id}`} className={classes.button}>
                  Show More
                  </Link>
                <Link to={`/contant`} className={classes.button}>
                  {image.price && `Make an order`}
                </Link>
              </CardActions>
            </Card>
            }
            </Fragment>
    )
}

export default PhotoItem
