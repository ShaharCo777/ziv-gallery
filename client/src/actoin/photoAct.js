import axios from 'axios'
import { REACT_APP_BASE_URL } from '../consts'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

// Add Photo
export const addPhoto = async (data)  =>{
    try {
        axios({
            method:'POST',
            url: `${REACT_APP_BASE_URL || ''}/api/photos/uploadPhoto`,
            data,
            config
          }).then(response => response && response.data)
          .then(resData => {
    //   const res = await axios.post(`/api/photos/uploadPhoto`, image, config)
      console.log(data)
      console.log(resData)
          })
      } catch (err) {
        console.log(err)
      }
}
// get photos
export const getPhotos = async ()  =>{
    try {
    const photos = await axios({
        method:'GET',
        url: `${REACT_APP_BASE_URL || ''}/api/photos/getPhotos`,
        config
        }).then(response => {
          return response.data})
          return photos
      } catch (err) {
        console.log(err)
      }
}
// get 5 photos


//get spesific photos by text
export const getPhotoByText = async (text)  =>{
  const data = {text}
  try {
  const photos = await axios({
      method:'PUT',
      url: `${REACT_APP_BASE_URL || ''}/api/photos/search`,
      data,
      config
      }).then(response => {
        return response.data})
        return photos
    } catch (err) {
      console.log(err)
    }
}

//get spesific photo
export const getPhoto = async (photoId)  =>{
  const data = {photoId}
  try {
  const photo = await axios({
      method:'PUT',
      url: `${REACT_APP_BASE_URL || ''}/api/photos/getPhoto`,
      data,
      config
      }).then(response => {
        return response.data})
        return photo
    } catch (err) {
      console.log(err)
    }
}

//get by subject
