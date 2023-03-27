import navbar from "../stylesheets/navbar.css"
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
        <nav id="navbar">
          <div style={{position:'relative'}}>
            <div id="bg"></div>
            <Link href='/'>
              <img id="nav-logo" src="tomer-logo-nobg.png" alt="tomer logo" height="auto"/>
            </Link>
          </div>

          <ul className='nav-list'>
            <li>
              <Link href="/productshow" className='nav-link'>
                The Product
              </Link>
            </li>
            <li>
              <Link href="/about" className='nav-link'>
                About
              </Link>
            </li>
            <li>
              <Link href="/manual" className='nav-link'>
                Manual
              </Link>
            </li>
          </ul>
        </nav>
    </>
  )
}
