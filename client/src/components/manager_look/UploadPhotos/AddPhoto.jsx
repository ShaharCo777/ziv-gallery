import React, {Fragment, useState, useCallback} from 'react'
import Grid from '@material-ui/core/Grid'
import { fade, makeStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';

import Dropzone from './Dropzone'
import Cropper from 'react-easy-crop'
import getCroppedImg from './CropImage'

import {addPhoto} from '../../../actoin/photoAct'

const useStyles = makeStyles((theme) => ({
  cropContainer:{
    // width: '700px',
    height:'350px',
    textAlign: 'center',
    margin: 'auto',
    // float: 'right',
    width: '610px',
    backgroundColor: '#eeeeee',
    // left: '0',
    position: 'relative',
  },
  dropzone:{
    height: '150px',
    width: '600px',
    // width: '600px',
    textAlign: 'center',
    margin: 'auto',
    // left: '0',
    // float: 'left',
    borderStyle: 'dashed',
  },
  controlersContainer:{
    width: '50%',
  },
  controlers: {
    width: '35%',
    marginRight: '20px',
  },
  textControler:{
  paddingLeft: '40%',
  },
  imageDeats:{
    // marginRight: theme.spacing(10),
    float: 'left',
  }
}))

const AddPhoto = ({addPetImages, src}) => {
  const [image, setImage] = useState({
    src: '',
    subject: '',
    headLine: '',
    info: '',
    price: null,
    date: Date.now
  })

  const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
      }, [])

    const classes = useStyles();

    const getBase64 = (image) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(image)
        })}


    const onDrop =async e =>{
           setImage({src: await getBase64(e[0])})
           setCrop({ x: 0, y: 0})
           setZoom(1)
           setRotation(0)
           console.log(image)
      }
      
      const changeRotation = (event, newValue) => {
        setRotation(newValue)
      }

      const changeZoom = (event, newValue) => {
        setZoom(newValue)
      }

    const onChange = e =>{
      e.preventDefault()
      setImage({...image, [e.target.name]: e.target.value})
    }

    const sentData = async (e) => {
        e.preventDefault()
        await setImage({...image, 
        src: await getCroppedImg(
                image.src,
                croppedAreaPixels,
                rotation
        )})
        await addPhoto(image)
        console.log(image)
          setImage({
            src: '',
            subject: '',
            headLine: '',
            info: '',
            date: Date.now
          })
          setZoom(1)
          setRotation(0)
      }
                
return (
  <Fragment>
<form className="form" onSubmit= {e => sentData(e)}>         
<div> 
<Dropzone 
onDrop={(e) => onDrop(e)}  
multiple={false}
style={classes.dropzone}
/>
<span className={classes.imageDeats}>
<h4>subject:<input name='subject' value={image.subject} placeholder='subject'onChange={e => onChange(e)}/></h4>
<h4>headLine:<input name='headLine' value={image.headLine} placeholder='headLine'onChange={e => onChange(e)}/></h4>
<h4>info:<textarea name='info' value={image.info} placeholder='info' onChange={e => onChange(e)}/></h4>
<h4>price:<input name='price' value={image.price} type='number' onChange={e => onChange(e)}/></h4>
<h4>date:<input name='date' value={image.date} type='date' onChange={e => onChange(e)}/></h4>
</span> 
<div className={classes.cropContainer}>
<Cropper
  image={image.src}
  crop={crop}
  zoom={zoom}
  rotation = {rotation}
  aspect={1}
  cropShape="rect"
  showGrid={false}
  restrictPosition={false}
  onCropChange={setCrop}
  onZoomChange={setZoom}
  onCropComplete={onCropComplete}
/></div>
<div>
<span className={classes.controlersContainer}>
<strong> Zoom</strong>
<Slider 
    className={classes.controlers}
    min={1} 
    max={3}
    value={zoom}
    step={0.1}
    onChange={changeZoom}
/></span>
<span>
<strong className={classes.controlersContainer}> Rotation</strong>
<Slider 
value={rotation}
onChange={changeRotation}
min={0} 
max={360}
value={rotation}
step={1}
className={classes.controlers}
aria-labelledby="continuous-slider" />

</span>
</div>
</div>      
<input type="submit" className="btn btn-primary my-1"  value='Submit'/>
</form>
</Fragment>
)
}

export default AddPhoto