import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PhotoItem from './PhotoItem'

import {getPhotos} from '../../actoin/photoAct'
import {tableArrange} from '../../lib/tableArrange'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
    item: {
      height: '800px',
      textAlign: 'center',
      backgroundColor: 'red',
    },
  }))

const PhotosRepresent = ({photos}) => {
    const classes = useStyles()
    const [images, setImages]  = useState([])

    useEffect(() => {
      console.log(photos)
      setImages(tableArrange(photos))
      }, [])

    const FormRow = ({photos}) => {
      return (
        <React.Fragment>
        {photos.map(photo =>(
        <Grid item xs={4}>
        <PhotoItem key={photos.indexOf(photo)} image={photo}/>
        </Grid>))}
        </React.Fragment>
      )
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
        {images && images.map(row => (
            <Grid container item xs={12} spacing={3}>
            <FormRow key={images.indexOf(row)} photos={row}/>
          </Grid>))}
        </Grid>
      </div>
    )
}

export default PhotosRepresent
