/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { MaterialBar } from '../UI/Molecules/MaterialBar'
import { NavLink } from '../UI/Atoms/NavLink'
import { linksArray } from '../constants/constants'

export const Navbar = ({ yourUrl }: {yourUrl?:string}) => {
  return (
    <>
      <MaterialBar>
        {linksArray.map((linkElement) => (
          <NavLink key={linkElement.linkName}>
            <Link
              href={linkElement.linkValue}
              as={linkElement.linkValue}
              prefetch={false}
            >
              <a
                className={ yourUrl && linkElement.linkValue === yourUrl ? 'active':""}
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
            text-decoration: none;
            margin: 5px;
          }
        `}
      </style>
    </>
  )
}

Navbar.propTypes = {
  yourUrl: PropTypes.string,
}
