import navbar from "../stylesheets/navbar.css"
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
        <nav id="navbar">
          <div style={{position:'relative'}}>
            <div id="bg"></div>
            <img id="nav-logo" src="tomer-logo-nobg.png" alt="tomer logo" height="auto" href='/' />
          </div>
          <ul className='nav-list'>
            <a className='nav-link' href="/productshow">The Product</a>
            <a className='nav-link' href="/about">About</a>
            <a className='nav-link' href="/manual">Manual</a>
          </ul>
        </nav>
    </>
  )
}
