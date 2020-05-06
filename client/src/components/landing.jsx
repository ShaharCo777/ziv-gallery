import React, {Fragment, useState, useEffect} from 'react'

import Slider from './slideShow/Slider.jsx'
import PhotosRepresetn from './photos/PhotosRepresent'
import spinner from '../aeditions/spinner.gif'
import {getPhotos} from '../actoin/photoAct'
import {tableArrange} from '../lib/tableArrange'


const Landing = () => {
    const [images, setImages]  = useState([])
    
    const fetchData = async () =>{
        const photos = await getPhotos()
        setImages(photos)
    }
    useEffect(() => {
        fetchData()
}, [])

    return (
        <Fragment>
       { images.length > 0 ? <Fragment>
       <Slider key={0} slides={
           [images[images.length-1].src,images[images.length-2].src,
           images[images.length-3].src,images[images.length-4].src,
           images[images.length-5].src,]} autoPlay={3}/>
        <PhotosRepresetn key={1} photos={images}/>
            </Fragment>: <img className={'spinner'} src={spinner}/>}
        </Fragment>
    )
}

export default Landing
