import { type CSSProperties, useEffect, useRef, useState } from 'react'
import homeScreen from './assets/folk-home.png'
import serverScreen from './assets/folk-servers.png'
import dnsScreen from './assets/folk-dns.png'
import protocolScreen from './assets/folk-protocol.png'
import folkLogo from './assets/folk-logo.png'
import googlePlayBadge from './assets/google-play.png'
import appStoreBadge from './assets/app-store.svg'
import macAppStoreBadge from './assets/mac-app-store.svg'
import androidDevice from './assets/device-android.png'
import iphoneDevice from './assets/device-iphone.png'
import macbookDevice from './assets/device-macbook.png'
import androidLogo from './assets/logo-android.png'
import appleLogo from './assets/logo-apple.png'
import BlurText from './BlurText'
import './App.css'

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.hotshot.vpn'

const handleAnimationComplete = () => {
  console.log('Animation completed!')
}

const features = [
  {
    title: 'One tap, private',
    copy: 'Open Folk VPN, choose a server, and protect your connection without creating an account.',
  },
  {
    title: 'Built for difficult networks',
    copy: 'WireGuard, AmneziaWG, and Xray options help keep browsing steady on restricted or crowded networks.',
  },
  {
    title: 'DNS you control',
    copy: 'Automatic, Google, Cloudflare, Cloudflare Family, and Quad9 options are ready when you need them.',
  },
]

const protocols = [
  {
    name: 'WireGuard',
    copy: 'Fast, modern tunneling for everyday browsing, streaming, and public WiFi.',
  },
  {
    name: 'AmneziaWG',
    copy: 'WireGuard with obfuscation for networks that block ordinary VPN traffic.',
  },
  {
    name: 'Xray',
    copy: 'Advanced obfuscation for restrictive and heavily filtered connections.',
  },
]

const storeCards = [
  {
    headline: 'Google Play',
    title: 'Android phones',
    tagline: 'Fast VPN access for everyday mobile networks.',
    image: androidDevice,
    imageAlt: 'Android phone device frame',
    logo: androidLogo,
    logoAlt: 'Android logo',
    logoOnly: true,
    badge: googlePlayBadge,
    badgeAlt: 'Get it on Google Play',
    href: playStoreUrl,
  },
  {
    headline: 'App Store',
    title: 'iPhone',
    tagline: 'One tap privacy for WiFi, 5G, and public hotspots.',
    image: iphoneDevice,
    imageAlt: 'iPhone device frame',
    logo: appleLogo,
    logoAlt: 'Apple logo',
    logoOnly: true,
    badge: appStoreBadge,
    badgeAlt: 'Download on the App Store',
    comingSoon: true,
  },
  {
    headline: 'Mac App Store',
    title: 'Mac',
    tagline: 'A calm desktop VPN for work, travel, and shared networks.',
    image: macbookDevice,
    imageAlt: 'MacBook device frame',
    badge: macAppStoreBadge,
    badgeAlt: 'Download on the Mac App Store',
    comingSoon: true,
  },
]

const stats = [
  ['500+', 'Play Store downloads'],
  ['0', 'accounts required'],
  ['4', 'DNS modes'],
  ['3', 'protocol choices'],
]

const privacySections = [
  {
    title: 'Information we collect',
    body: 'Folk VPN is designed to work without registration. We do not ask for your name, email address, password, or browsing history. The app may receive limited device, app performance, diagnostics, and advertising identifiers through platform services so the app can run, measure stability, and support ads or purchases.',
  },
  {
    title: 'How we use information',
    body: 'We use limited technical information to provide VPN connectivity, keep the app reliable, prevent abuse, understand crashes, show ads where applicable, and process in-app purchases through the app store. We do not sell your browsing activity.',
  },
  {
    title: 'VPN traffic and logs',
    body: 'We do not intentionally record the websites you visit, the content you access, or the files you transfer while connected. Some temporary technical data may be processed only as needed to operate and secure the VPN service.',
  },
  {
    title: 'Third-party services',
    body: 'Folk VPN may use services from Google Play, advertising networks, analytics providers, payment processors, DNS providers, and infrastructure partners. Their processing is governed by their own privacy terms.',
  },
  {
    title: 'Children and families',
    body: 'The app is intended for a general audience. If you believe a child has provided personal information to us, contact us so we can review and delete it where required.',
  },
  {
    title: 'Contact',
    body: 'For privacy questions, support, or deletion requests, email kavachinnovation@gmail.com. This policy was last updated on September 21, 2026.',
  },
]

const screenShots = [
  { src: homeScreen, alt: 'Folk VPN home connection screen' },
  { src: serverScreen, alt: 'Server choices in Folk VPN' },
  { src: dnsScreen, alt: 'DNS choices in Folk VPN' },
  { src: protocolScreen, alt: 'Protocol choices in Folk VPN' },
]

function Icon({ name }: { name: 'shield' | 'bolt' | 'globe' | 'lock' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      {name === 'shield' && (
        <path d="M12 3l7 2.8v5.9c0 4.4-2.9 7.1-7 9.3-4.1-2.2-7-4.9-7-9.3V5.8L12 3z" />
      )}
      {name === 'bolt' && <path d="M13 2L4 14h7l-1 8 10-13h-7l1-7z" />}
      {name === 'globe' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9z" />
        </>
      )}
      {name === 'lock' && (
        <>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </>
      )}
    </svg>
  )
}

function Header({ privacy = false }: { privacy?: boolean }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Folk VPN home">
        <span className="brand-mark">
          <img src={folkLogo} alt="" />
        </span>
        <span>Folk VPN</span>
      </a>
      <nav aria-label="Primary navigation">
        {!privacy && <a href="#features">Features</a>}
        {!privacy && <a href="#screens">Screens</a>}
        <a href="/privacy">Privacy</a>
      </nav>
    </header>
  )
}

function ShowcaseRail() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const section = sectionRef.current

      if (!section) {
        return
      }

      const scrollRange = section.offsetHeight - window.innerHeight
      const rawProgress = (window.scrollY - section.offsetTop) / scrollRange
      const progress = Math.min(1, Math.max(0, rawProgress))

      setScrollProgress(progress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  return (
    <section className="showcase-section" id="screens" ref={sectionRef}>
      <div className="screen-stage" aria-label="Folk VPN app screens">
        <div
          className="screen-rail"
          style={
            {
              '--rail-shift': `${scrollProgress * 150}px`,
            } as CSSProperties
          }
        >
          {screenShots.map((screen) => (
            <figure className="rail-screen" key={screen.alt}>
              <img src={screen.src} alt={screen.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoreBadge({
  badge,
  badgeAlt,
  comingSoon,
  href,
}: {
  badge: string
  badgeAlt: string
  comingSoon?: boolean
  href?: string
}) {
  if (comingSoon) {
    return (
      <span
        className="store-badge store-badge-soon"
        aria-label={`${badgeAlt}. Coming soon`}
        data-tooltip="Coming soon"
        role="img"
        tabIndex={0}
      >
        <img src={badge} alt="" />
      </span>
    )
  }

  return (
    <a
      className="store-badge"
      href={href}
      target="_blank"
      aria-label={badgeAlt}
    >
      <img src={badge} alt="" />
    </a>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <Header />
        <div className="hero-grid">
          <div className="hero-copy">
            <BlurText
              text="Folk VPN keeps your internet quiet."
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="hero-title"
            />
            <p className="hero-lede">
              Browse on public WiFi, switch servers, and choose stronger
              protocols when networks get restrictive. No account needed.
            </p>
            <div className="hero-actions">
              <a
                className="play-badge"
                href={playStoreUrl}
                target="_blank"
                aria-label="Get Folk VPN on Google Play"
              >
                <img src={googlePlayBadge} alt="" />
              </a>
              <span
                className="play-badge play-badge-soon"
                aria-label="Download on the App Store. Coming soon"
                data-tooltip="Coming soon"
                role="img"
                tabIndex={0}
              >
                <img src={appStoreBadge} alt="" />
              </span>
              <a className="secondary-button hero-feature-link" href="#features">
                See features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="store-section" aria-label="Download Folk VPN">
        <div className="store-bento">
          {storeCards.map((card) => (
            <article className="store-card" key={card.title}>
              <p className="store-headline">{card.headline}</p>
              <div
                className={`store-device${card.logoOnly ? ' store-device-logo-only' : ''}`}
              >
                {!card.logoOnly && <img src={card.image} alt={card.imageAlt} />}
                {card.logo && (
                  <img
                    className="platform-logo"
                    src={card.logo}
                    alt={card.logoAlt}
                  />
                )}
              </div>
              <div className="store-card-copy">
                <h2>{card.title}</h2>
                <p>{card.tagline}</p>
              </div>
              <StoreBadge
                badge={card.badge}
                badgeAlt={card.badgeAlt}
                comingSoon={card.comingSoon}
                href={card.href}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="logo-band" aria-label="Availability">
        <span>WiFi</span>
        <span>4G</span>
        <span>5G</span>
        <span>LTE</span>
        <span>Public hotspots</span>
      </section>

      <section className="feature-section" id="features">
        <div className="section-kicker">Protection without setup</div>
        <div className="section-heading">
          <h2>A VPN interface that gets out of your way.</h2>
          <p>
            The app opens on the one thing that matters: your connection state.
            Advanced controls stay close, but never crowd the main action.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-panel" key={feature.title}>
              <Icon name={index === 0 ? 'lock' : index === 1 ? 'bolt' : 'globe'} />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="protocol-section" aria-labelledby="protocol-title">
        <div>
          <div className="section-kicker">Supported protocols</div>
          <h2 id="protocol-title">Pick the tunnel that fits the network.</h2>
        </div>
        <div className="protocol-grid">
          {protocols.map((protocol) => (
            <article className="protocol-card" key={protocol.name}>
              <span>{protocol.name}</span>
              <p>{protocol.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ShowcaseRail />

      <section className="mockup-section">
        <div className="mockup-media">
          <img src={homeScreen} alt="Folk VPN home connection screen" />
        </div>
        <div className="mockup-copy">
          <div className="section-kicker">Made for daily use</div>
          <h2>Tap once before streaming, banking, or using shared WiFi.</h2>
          <p>
            Folk VPN masks your IP address, encrypts traffic in transit, and
            helps you access the open internet from the networks you already
            use.
          </p>
          <dl className="stats-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Folk VPN</strong>
          <p>Secure & Fast Proxy by Hotshot Labs.</p>
        </div>
        <div className="footer-links">
          <a href={playStoreUrl} target="_blank">
            Google Play
          </a>
          <a href="/privacy">Privacy Policy</a>
          <a href="mailto:kavachinnovation@gmail.com">Support</a>
        </div>
      </footer>
    </main>
  )
}

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <Header privacy />
      <section className="privacy-hero">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Folk VPN privacy policy</h1>
        <p>
          This policy explains how Folk VPN handles information when you use the
          Android app and related support channels.
        </p>
      </section>
      <section className="policy-list">
        {privacySections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
      <section className="policy-note">
        <h2>Important note</h2>
        <p>
          This generated policy is a practical starting point for your app
          listing and website. Review it with your actual SDKs, ad partners,
          server logs, purchase flow, and local legal requirements before
          publishing.
        </p>
      </section>
      <footer className="site-footer">
        <div>
          <strong>Folk VPN</strong>
          <p>Secure & Fast Proxy by Hotshot Labs.</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href={playStoreUrl} target="_blank">
            Google Play
          </a>
          <a href="mailto:kavachinnovation@gmail.com">Support</a>
        </div>
      </footer>
    </main>
  )
}

function App() {
  const isPrivacyPage = window.location.pathname === '/privacy'

  return isPrivacyPage ? <PrivacyPage /> : <HomePage />
}

export default App
