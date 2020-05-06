import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {getPhotoByText} from '../actoin/photoAct'
import {textSearch} from '../lib/search'

const useStyles = makeStyles((theme) => ({
    root: {
      position: "static",
      backgroundColor: '#f5f5f5',
      margin: '0',
    },
    siteIcon:{
        height: '50px',
        width: '150px',
        left:'0',
    },
    menuButton: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textDecoration: 'none',
      color: 'black'
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.1),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.15),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }))
  
const Navbar = ({isManger}) => {
    const classes = useStyles()

    const [searchTerm, setSearchTerm] = useState('')
    const [search, setSearch] = useState(false)


    useEffect(() => {
      setSearch(false)
      setSearchTerm('')
    }, [search])


  const onChange = e=>{
    setSearchTerm(e.target.value)
  }

  const onSearch = e=>{
    if (e.key === 'Enter') {
    setSearch(true)
    } 
  }

    return (
      <div className={classes.root} >
      {search? <Redirect 
      to={{
        pathname: `/result/${searchTerm}`,
      }}
    /> : null}
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          <Link to='/' className={classes.menuButton}>          
          <img className={classes.siteIcon} src={require('../aeditions/Symbol.png')} />
          </Link>
          </Typography>
          {isManger?
          <Link to='/manager/uploadPhoto' className={classes.menuButton}>
            Add Photo</Link> : null}
          {/* -I want to look at- */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e)=>onChange(e)}
              onKeyDown={(e) => onSearch(e)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {/* <Link to='/contant' className={classes.menuButton}>           */}
          {/* <ArrowDropDownIcon/>Sort */}
          {/* </Link> */}
          <Link to='/contant' className={classes.menuButton}>          
          Contant Me
          </Link>
        </Toolbar>
    </div>

  )
}

export default Navbar
