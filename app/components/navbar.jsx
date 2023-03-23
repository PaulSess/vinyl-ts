import navbar from "../stylesheets/navbar.css"

export default function Navbar() {
  return (
    <>
        <nav id="navbar">
          <img src="tomer.jpg" alt="tomer logo" width={100} height="auto" />
          <ul className='nav-list'>
            <a className='nav-link' href="/productshow">The Product</a>
            <a className='nav-link' href="/about">About</a>
            <a className='nav-link' href="/manual">Manual</a>
          </ul>
        </nav>
    </>
  )
}
