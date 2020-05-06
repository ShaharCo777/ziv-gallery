import React, {useEffect, useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PhotoItem from './PhotoItem'

import {getPhotoByText} from '../../actoin/photoAct'
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
    },
    headLine:{
        textAlign:'center',
        margin: 'auto',
        marginBottom: theme.spacing(2),
        width:'98%',
        borderBottom: '1px double',
        // padding: theme.spacing(1),
    }
  }))

const PhotoResult = ({match:{
    params
}}) => {
    const classes = useStyles()
    const [images, setImages]  = useState(false)

    console.log(params.searchTerm)

    const loadPhotos = async()=>{
        const photos = await getPhotoByText(params.searchTerm)
        setImages(tableArrange(photos))
      }
      useEffect(() => {
        loadPhotos()
      }, [params])
  

      const FormRow = ({photos}) => {
        return (
          <Fragment>
          {photos.map(photo =>(
          <Grid item xs={4}>
          <PhotoItem key={photos.indexOf(photo)} image={photo}/>
          </Grid>))}
          </Fragment>
        )
      }
    
      return (
        <div className={classes.root}>
         {   images? 
          <Grid container spacing={1}>
            <div className={classes.headLine}>
            <h1>Photos for "{params.searchTerm}"</h1>
            </div>
          {images && images.map(row => (
              <Grid container item xs={12} spacing={3}>
              <FormRow key={images.indexOf(row)} photos={row}/>
            </Grid>))}
          </Grid> : <h1>
              Sorrey, we dont have what you are looking for...
              </h1>}
        </div>
      )
}

export default PhotoResult
