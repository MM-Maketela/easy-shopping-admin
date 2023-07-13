import React from 'react'
import classes from './SideBar.module.css'
import {BsCardChecklist} from 'react-icons/bs/index.esm'
import { MiniCard } from '../mini-card/MiniCard'
import { Link } from 'react-router-dom'
export const SideBar = () => {


  return (
    <div className={classes.SideBar}>
        <Link to={'/'} className={classes.link}>
            <div className={classes.topHeader}>
            <BsCardChecklist  size={50}/>
            <div>Easy-Shopping</div>
          </div>
        </Link>
     
      <div className={classes.elements}>

      
      <Link to={'/products'} className={classes.link}>
      <MiniCard info={{info:"products"}}/>
      </Link>
      <Link to={'/stats'} className={classes.link}>
      <MiniCard info={{info:"stats"}}/>
      </Link>
      <Link to={'/settings'} className={classes.link}>
      <MiniCard info={{info:"settings"}}/>
      </Link>
      <Link to={'/'}  className={classes.link}>
      <MiniCard info={{info:"help"}}/>
      </Link>
        

      </div>

    </div>
  )
}
