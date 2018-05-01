import React from 'react'
import Aux from '../../hoc/Auxi'
import classes from './Layout.css'

const layout = ({ children }) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content} >
      { children }
    </main>
  </Aux>
)

export default layout