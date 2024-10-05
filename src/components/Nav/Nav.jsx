import './Nav.css'

import {NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {navLinks} from '../../data/Data'

import {usezstate} from 'react'

export default function Nav() {
  return (
    <nav>
      <ul className='navLinks'>
        {
          navLinks.map(({id, name, path, icon}) => {
            return(
              <li className='nav-item' key={id}>
                <NavLink to ={path} className={({isActive})=> isActive ? 'nav-Link navLinksActive' : 'nav-Link'}>
                  <span><FontAwesomeIcon icon={icon} /></span>
                  <h3>{name}</h3>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <div className="nav-toggle nav-close">
        <span></span>
        <span></span>
        <span></span>        
      </div>
      
    </nav>
  )
}
