import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">UCompany</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto" itemScope itemType="http://schema.org/SiteNavigationElement">
          <li className="nav-item active" itemProp="name" role="menuitem">
            <Link href="/" passHref><a itemProp="url" title="title of hyperlink">Home</a></Link>
          </li>
          <li className="nav-item" itemProp="name" role="menuitem">
            <Link href="/a" passHref><a itemProp="url" title="title of hyperlink">A-page</a></Link>
          </li>
          <li className="nav-item" itemProp="name" role="menuitem">
            <Link href="/b" passHref><a itemProp="url" title="title of hyperlink">B-page</a></Link>
          </li>
        </ul>

        <style jsx>{`
          ul li {
            margin-right: 20px;
          }
          ul li a {
            color: #fff;
            text-decoration: none;
          }          
        `}</style>
      </div>
    </nav>
  )
}

