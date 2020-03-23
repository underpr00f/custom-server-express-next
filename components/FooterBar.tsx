/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { linksArray } from '../constants/constants'
import { BottomNavItem } from '../UI/Atoms/BottomNavItem'
import { MaterialFooter } from '../UI/Molecules/MaterialFooter'

export const FooterBar = () => {

  return (
    <>
      <MaterialFooter> 
      <div className="container footer-container">       
        <div className="footer-logo">
          <img src="https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="footer-logo" />
        </div>
        <div className="footer-list">{linksArray.map((linkElement) => (
          <BottomNavItem key={linkElement.linkName} text={linkElement.linkName} value={linkElement.linkValue} />
        ))}
        </div>
        <div className="footer-contact"></div>
        <div className="footer-copyright"> 
              2020 - created by underproof
        </div>
      </div>
      </MaterialFooter>
      <style jsx>
        {`
          a {
            text-decoration: none;
            margin: 5px;
            
          }
          .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2.5rem 0 0.5rem;
          }
          .footer-list {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-copyright {
            padding: 3rem 0 0;
            flex: 1 1 100%;
            text-align:center;
            opacity: 0.8;
          }
          img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  )
}

// FooterBar.propTypes = {
//   yourUrl: PropTypes.string,
// }
