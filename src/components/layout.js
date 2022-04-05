import * as React from 'react'
import { Link } from 'gatsby'
import {container} from './layout.module.css'
import './add.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className='nav-links'>
          <li className='nav-link-item'><Link className='nav-link-text' to="/">Home</Link></li>
          <li className='nav-link-item'><Link className='nav-link-text' to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className='heading'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;