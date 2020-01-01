import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <Link href="/" as="/" prefetch={false}><a className="navbar-brand">UCompany</a></Link>
        <ul className="navbar-nav mr-auto" itemScope itemType="http://schema.org/SiteNavigationElement">
          <li className="nav-item active" itemProp="name" role="menuitem">
            <Link href="/" as="/" prefetch={false}><a itemProp="url" title="title of hyperlink">Home</a></Link>
          </li>
          <li className="nav-item" itemProp="name" role="menuitem">
            <Link href="/contact" as="/contact" prefetch={false}><a itemProp="url" title="title of hyperlink">Contact page</a></Link>
          </li>
          <li className="nav-item" itemProp="name" role="menuitem">
            <Link href="/b" as="/b" prefetch={false}><a itemProp="url" title="title of hyperlink">B-page</a></Link>
          </li>
          <li className="nav-item" itemProp="name" role="menuitem">
            <Link href="/about" as="/about" prefetch={false}><a itemProp="url" title="title of hyperlink">About</a></Link>
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

