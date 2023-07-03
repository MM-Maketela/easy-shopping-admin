import React from 'react'
import classes from './Header.module.css'
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
        <div id={classes.search}>

          <div>search</div>
        </div>
      </div>
      <div id={classes.otherIcons}>
        
        <div id={classes.bell} >
          <AiOutlineBell size={size}/>
        </div>
        <div id={classes.mail} >
          <AiOutlineMail size={size}/>
        </div>
        <div id={classes.profile} >
          <BsPersonCircle size={size}/>
        </div>

      </div>

    </div>
  )
}
