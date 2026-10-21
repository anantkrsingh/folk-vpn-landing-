import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import folkLogo from '../assets/folk-logo.png'

function Header() {
  const isHome = useLocation().pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <Link className="brand" to="/" aria-label="Folk VPN home">
        <span className="brand-mark">
          <img src={folkLogo} alt="" />
        </span>
        <span>Folk VPN</span>
      </Link>
      <nav aria-label="Primary navigation">
        {isHome && <a className="hidden sm:inline" href="#features">Features</a>}
        {isHome && <a className="hidden sm:inline" href="#screens">Screens</a>}
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/delete-account">Delete Account</Link>
      </nav>
    </header>
  )
}

export default Header
