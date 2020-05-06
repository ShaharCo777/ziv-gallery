import React, {useEffect, useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import spinner from '../../aeditions/spinner.gif'

import signtor from '../../aeditions/Symbol.png'

import {getPhoto} from '../../actoin/photoAct'


const useStyles = makeStyles((theme) => ({
    photo:{
        height: '500px',
        width: '800px',
        margin: theme.spacing(5),
        border: '0.8px double',
        borderRadius: '10px',
        },
    photoCover:{
        height: '300px',
        width: '400px',
        padding: '5px',
        border: '1px double',
        borderRadius: '50px',
    },
    photoDeats:{
        position:'absolute',
        marginTop: theme.spacing(6),
        disply: 'block',
        width: '30%',
        borderTop: '1px double',
        borderBottom: '1px double',
        right:'5%',
    },
    headLine:{
        fontFamily: 'Actor',
        fontSize: '50px',
        textShadow: '-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black',

    },
    info:{
        disply: 'inline-block',
        width: '100%',
        overflow: 'auto',
        fontFamily: 'Actor',
        fontSize: '20px',

    },
    subject:{

    },
    paper:{
        position:'absolute',
        width: '33%',
        bottom:'8%',
        right:'4%',
        borderBottom:'0.2px solid',
        borderTop:'0.2px solid',
    },
    tab:{
        width: "33%",
        borderRight:'2px solid',
    },
    signtor:{
        position:'absolute',
        margin: theme.spacing(7),
        height: '50px',
        width: '100px',
        opacity: '0.5',
        zIndex: '10',
    }
}))

const PhotoPage = ({
    match:{
        params
    }}) => {
    const classes = useStyles();
    const [image, setImage]  = useState({})

    const loadPhoto = async()=>{
        const photo = await getPhoto(params.id)
        console.log(photo)
        setImage(photo)
      }
      useEffect(() => {
        loadPhoto()
      }, [])

    return (
        <Fragment>
            {image? <Fragment>
                <div>
                <div className={classes.photoDeats}>
                <h1 className={classes.headLine}>{image.headLine}</h1>
                <p className={classes.info}>{image.info}</p>
                <h5 className={classes.subject}>#{image.subject}</h5>
            </div>
            <Paper square>
                 <Tabs
                 className={classes.paper}
                //   value={value}
                  indicatorColor="primary"
                   textColor="primary"
                // onChange={handleChange}
                 aria-label="disabled tabs example"
                >
                <Tab label="Add to cart" className={classes.tab} />
                ||
                <Tab label="Buy now!" className={classes.tab}/>
                ||
                <Tab label="cotant me!" className={classes.tab}/>
                </Tabs>
                </Paper>
                </div>
                {/* Add to cart || Buy now! || cotant me! */}
            <img src={signtor} className={classes.signtor}/>
            <img src={image.src} className={classes.photo}/>
            </Fragment>: <img className={'spinner'} src={spinner}/>}
        </Fragment>
    )
}

export default PhotoPage
