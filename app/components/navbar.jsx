import navbar from "../stylesheets/navbar.css"

export default function Navbar() {
  return (
    <>
        <nav id="navbar">
          <div style={{position:'relative'}}>
            <div id="bg"></div>
            <img id="nav-logo" src="tomer.png" alt="tomer logo" height="auto" />
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
