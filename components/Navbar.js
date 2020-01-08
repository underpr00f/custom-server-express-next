/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { MaterialBar } from '../UI/Molecules/MaterialBar'
import { NavLink } from '../UI/Atoms/NavLink'

export const Navbar = ({ yourUrl }) => {
  const linksArray = [
    { linkName: 'Main', linkValue: '/' },
    { linkName: 'Contact', linkValue: '/contact' },
    { linkName: 'B', linkValue: '/b' },
    { linkName: 'About', linkValue: '/about' },
  ]
  return (
    <>
      <MaterialBar itemScope itemType="http://schema.org/SiteNavigationElement">
        {linksArray.map((linkElement) => (
          <NavLink key={linkElement.linkName} itemProp="name" role="menuitem">
            <Link
              href={linkElement.linkValue}
              as={linkElement.linkValue}
              prefetch={false}
            >
              <a
                className={
                  yourUrl && linkElement.linkValue === yourUrl && 'active'
                }
                itemProp="url"
                title="title of hyperlink"
              >
                {linkElement.linkName}
              </a>
            </Link>
          </NavLink>
        ))}
      </MaterialBar>
      <style jsx>
        {`
          a {
            color: #82dee6;
            text-decoration: none;
            margin: 5px;
          }
          a.active {
            color: #e68b82;
          }
          a:hover {
            color: #13acbd;
          }
        `}
      </style>
    </>
  )
}

Navbar.propTypes = {
  yourUrl: PropTypes.string,
}
