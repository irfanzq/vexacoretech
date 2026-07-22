import { useState } from 'react'

export default function Navbar({ onSidebarOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const toggleSearch = () => setSearchOpen((prev) => !prev)

  return (
    <div id="navbar" className="navbar-area navbar-area-two">
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="#home">
              <img alt="VexaCore Technologies" className="black-logo" width="124" height="38" src="/images/logo.png" />
              <img alt="VexaCore Technologies" className="white-logo" width="124" height="38" src="/images/logo-white.png" />
            </a>
            <button
              className={`navbar-toggler navbar-toggler-right ${menuOpen ? '' : 'collapsed'}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="others-options">
              <div className="option-item">
                <i
                  className="search-btn flaticon-search"
                  style={{ display: searchOpen ? 'none' : 'block' }}
                  onClick={toggleSearch}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleSearch()}
                ></i>
                <i
                  className={`close-btn flaticon-close ${searchOpen ? '' : ''}`}
                  style={{ display: searchOpen ? 'block' : 'none' }}
                  onClick={toggleSearch}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleSearch()}
                ></i>
                <div className="search-overlay search-popup" style={{ display: searchOpen ? 'block' : 'none' }}>
                  <div className="search-box">
                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                      <input className="search-input" placeholder="Search" type="text" name="search" />
                      <button className="search-button" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="burger-menu" onClick={onSidebarOpen} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onSidebarOpen()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
