import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import {container} from './layout.module.css'
import './add.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
// console.log(data)

  
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className="site-title"> {data.site.siteMetadata.title}</header>
      <nav>
        <ul className='nav-links'>
          <li className='nav-link-item'><Link className='nav-link-text' to="/">Home</Link></li>
          <li className='nav-link-item'><Link className='nav-link-text' to="/about">About</Link></li>
          <li className='nav-link-item'><Link className='nav-link-text' to="/blog">Blog</Link></li>
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