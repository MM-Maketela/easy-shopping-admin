import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'
import {AiOutlineBell, AiOutlineMail} from 'react-icons/ai/index.esm'
import {BsPersonCircle} from 'react-icons/bs/index.esm'

export const Header = () => {
  const size = 30
  return (
    <div id={classes.Header}>
      <Logo/>
      <div id={classes.searchBar}>
        <input type='text' id={classes.bar}>
          
        </input>
        <div id={classes.search} onClick={()=> alert("div clicked")}>

        <div  >search</div>
        </div>
      </div>
      <div id={classes.otherIcons}>
        

        <Link   style={{color:"steelblue"}}>
          <div id={classes.bell} >
          <AiOutlineBell size={size}/>
        </div>
        </Link>
        

        <Link style={{color:"steelblue"}}>
          <div id={classes.mail} >
            <AiOutlineMail size={size}/>
          </div>
        </Link>
        
        <Link  to={'/profile'} id={classes.profile} style={{color:"steelblue"}} >
          <BsPersonCircle size={size}/>
        </Link>

      </div>

    </div>
  )
}
