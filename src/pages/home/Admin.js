import React from 'react'
import classes from './Admin.module.css'
import { MiniBar } from '../../components/mini-bar/MiniBar'
export const Admin = () => {
  return (
    <div className={classes.MiniBar}>
      <MiniBar  info={{title:'admin'}}/>
      <div>
        home
      </div>

    </div>
  )
}
