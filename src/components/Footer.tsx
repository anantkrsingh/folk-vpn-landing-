import { Link, useLocation } from 'react-router-dom'
import { playStoreUrl, supportEmail } from '../constants'

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/delete-account', label: 'Delete Account' },
]

function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      <div>
        <strong>Folk VPN</strong>
        <p>Secure & Fast Proxy by Hotshot Labs.</p>
      </div>
      <div className="footer-links">
        {pageLinks
          .filter((link) => link.to !== pathname)
          .map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        <a href={playStoreUrl} target="_blank">
          Google Play
        </a>
        <a href={`mailto:${supportEmail}`}>Support</a>
      </div>
    </footer>
  )
}

export default Footer
