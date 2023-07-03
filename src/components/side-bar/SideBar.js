import React from 'react'
import classes from './SideBar.module.css'
import {BsCardChecklist} from 'react-icons/bs/index.esm'
import { MiniCard } from '../mini-card/MiniCard'
import { Link } from 'react-router-dom'
export const SideBar = () => {


  return (
    <div className={classes.SideBar}>

      <div className={classes.topHeader}>
        <BsCardChecklist  size={50}/>
        <div>Easy-Shopping</div>
      </div>
      <div className={classes.elements}>


      <Link to={'/products'}>
      <MiniCard info={{info:"products"}}/>
      </Link>
      <Link to={'/stats'}>
      <MiniCard info={{info:"stats"}}/>
      </Link>
      <Link to={'/settings'}>
      <MiniCard info={{info:"settings"}}/>
      </Link>
        
        

      </div>

    </div>
  )
}
