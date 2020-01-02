/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { MaterialBar } from '../UI/Molecules/MaterialBar'
import { NavLink } from '../UI/Atoms/NavLink'

export const Navbar = () => {
  const linksArray = [
    { linkName: 'Main', linkValue: '/' },
    { linkName: 'Contact', linkValue: '/contact' },
    { linkName: 'B', linkValue: '/b' },
    { linkName: 'About', linkValue: '/about' },
  ]

  return (
    <>
      <MaterialBar itemScope itemType="http://schema.org/SiteNavigationElement">
        {linksArray.map(linkElement => (
          <NavLink key={linkElement.linkName} itemProp="name" role="menuitem">
            <Link
              href={linkElement.linkValue}
              as={linkElement.linkValue}
              prefetch={false}
            >
              <a itemProp="url" title="title of hyperlink">
                {linkElement.linkName}
              </a>
            </Link>
          </NavLink>
        ))}
      </MaterialBar>
    </>
  )
}
