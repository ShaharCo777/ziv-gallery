import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

import contantPhoto from '../../aeditions/contantPhoto.jpg'
import contantPhoto1 from '../../aeditions/contantPhoto1.jpeg'
import contantPhoto2 from '../../aeditions/contantPhoto2.jpeg'
import contantPhoto3 from '../../aeditions/contantPhoto3.jpg'
import contantPhoto4 from '../../aeditions/contantPhoto4.png'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        marginBottom: theme.spacing(2),
        width:'100%',
        height: '100%',
        margin: '0px',
        // background: 'linear-gradient(black, #fff59d )',
        // backgroundImage: require("../../aeditions/contantPhoto4.png"),
        borderBottom: '1px double',
    },
    filed: {
        margin: '3px',
    },
    info:{
        margin: '0px',
    },
    contant:{
        width:'15%',
        height: '100%',
        color:'black',
        textDecoration:'none',
        marginTop: theme.spacing(5),
        display:'inline-block',

    },
    bgImage:{
        width: '100%',
        height: '300px',
    },
    smImage:{
        marginTop:'0',
        width: '100%',
        height: '100%',

        // width: '300px',
        // height: '200px',
        // float:'left',
        // position:'absolute'
    }
  }))

const ContantPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
          {/* <img src={contantPhoto} className={classes.image}/> */}
          {/* <img src={contantPhoto} className={classes.smImage}/> */}
          <img src={contantPhoto1} className={classes.bgImage}/>

          <h1>Contant Us</h1>
           {/* <PhoneIcon/> */}
          {/* <h3>Contant Info</h3> */}
          <a href=" https://wa.me/0542272204" 
          className={classes.contant}><WhatsAppIcon/>
          <h4 className={classes.filed}>Phone Number</h4>
          <h5 className={classes.info}>+972542272204</h5> 
          </a><a href="idoshziv@gmail.com?subject = I want to make an order = Message"
          className={classes.contant}><MailOutlineIcon/>
          <h4 className={classes.filed}>Mail</h4>
          <h5 className={classes.info}>idoshziv@gmail.com </h5> 
          </a><a href="https://www.instagram.com/idoziv311/"
          className={classes.contant}><InstagramIcon/>
          <h4 className={classes.filed}>Instagram</h4>
          <h5 className={classes.info}>idoziv311</h5> 
          </a><a href="https://www.facebook.com/ido.ziv.3"
          className={classes.contant}><FacebookIcon/>
          <h4 className={classes.filed}>Facebook</h4>
          <h5 className={classes.info}>Ido Ziv</h5>          
          </a>
          {/* <img src={contantPhoto3} className={classes.smImage}/> */}


        </div>
    )
}

export default ContantPage
