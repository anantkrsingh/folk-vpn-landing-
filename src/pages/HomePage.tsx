import homeScreen from '../assets/folk-home.png'
import googlePlayBadge from '../assets/google-play.png'
import appStoreBadge from '../assets/app-store.svg'
import macAppStoreBadge from '../assets/mac-app-store.svg'
import androidDevice from '../assets/device-android.png'
import iphoneDevice from '../assets/device-iphone.png'
import macbookDevice from '../assets/device-macbook.png'
import androidLogo from '../assets/logo-android.png'
import appleLogo from '../assets/logo-apple.png'
import BlurText from '../components/BlurText'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Icon from '../components/Icon'
import ShowcaseRail from '../components/ShowcaseRail'
import StoreBadge from '../components/StoreBadge'
import { playStoreUrl } from '../constants'

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

const heroChips = [
  { icon: 'lock' as const, label: 'Encrypted tunnel', position: 'top-[16%] left-0 sm:left-[6%]' },
  {
    icon: 'bolt' as const,
    label: 'WireGuard · AmneziaWG · Xray',
    position: 'right-0 bottom-[14%] sm:right-[2%] [animation-delay:-3s]',
  },
]

const networks = ['WiFi', '4G', '5G', 'LTE', 'Public hotspots', 'Airports', 'Cafés', 'Hotels']

const stats = [
  ['500+', 'Play Store downloads'],
  ['0', 'accounts required'],
  ['4', 'DNS modes'],
  ['3', 'protocol choices'],
]

function HomePage() {
  return (
    <main>
      <section className="min-h-svh bg-[var(--bg)] p-2 pt-[78px] md:pt-[88px]">
        <Header />
        <div className="relative isolate mt-1 grid min-h-[calc(100svh-104px)] items-center gap-6 overflow-hidden rounded-[20px] border border-white/10 bg-surface px-5 pt-12 pb-6 text-white sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_78%_50%,rgb(49_213_111/0.28),transparent_70%),radial-gradient(40%_50%_at_10%_100%,rgb(17_152_255/0.16),transparent_70%)]"
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 font-mono text-[13px] text-white/85">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-brand motion-safe:animate-pulse-dot"
              />
              No account. No sign-up. One tap.
            </p>
            <BlurText
              text="Folk VPN keeps your internet quiet."
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="mb-5 max-w-[560px] text-[clamp(32px,4.2vw,56px)] leading-[1.02] tracking-tight text-white [&>span:last-child]:bg-linear-to-r [&>span:last-child]:from-brand [&>span:last-child]:to-[#8ef5b4] [&>span:last-child]:bg-clip-text [&>span:last-child]:text-transparent"
            />
            <p className="m-0 max-w-[500px] text-lg leading-relaxed text-white/70">
              Browse on public WiFi, switch servers, and choose stronger
              protocols when networks get restrictive. No account needed.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                className="block w-[202px] rounded-[10px] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgb(49_213_111/0.3)] active:scale-95"
                href={playStoreUrl}
                target="_blank"
                aria-label="Get Folk VPN on Google Play"
              >
                <img src={googlePlayBadge} alt="" className="w-full" />
              </a>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className="block w-[202px] cursor-pointer rounded-[10px]"
                    aria-label="Download on the App Store. Coming soon"
                    role="img"
                    tabIndex={0}
                  >
                    <img src={appStoreBadge} alt="" className="w-full" />
                  </span>
                </TooltipTrigger>
                <TooltipContent sideOffset={6}>Coming soon</TooltipContent>
              </Tooltip>
            </div>
            <a
              href="#features"
              className="mt-5 text-white/80 underline decoration-1 underline-offset-[5px] transition hover:text-brand"
            >
              See features
            </a>
          </div>

          <div
            aria-hidden="true"
            className="relative grid min-h-[440px] place-items-center sm:min-h-[560px]"
          >
            {[0, 1.5, 3].map((delay) => (
              <span
                key={delay}
                className="absolute aspect-square w-[300px] rounded-full border border-brand/40 opacity-0 motion-safe:animate-ring"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
            <figure className="relative m-0 aspect-[9/19.5] w-[clamp(210px,22vw,290px)] -rotate-4 overflow-hidden rounded-[44px] border-8 border-[#1b1914] bg-sand shadow-[0_0_0_1px_rgb(255_255_255/0.12),0_40px_90px_rgb(0_0_0/0.55),0_0_120px_rgb(49_213_111/0.22)] motion-safe:animate-float">
              <img src={homeScreen} alt="" className="size-full object-cover" />
            </figure>
            {heroChips.map((chip) => (
              <div
                key={chip.label}
                className={`absolute inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white backdrop-blur-md motion-safe:animate-float-chip [&_.icon]:m-0 [&_.icon]:size-4 [&_.icon]:text-brand ${chip.position}`}
              >
                <Icon name={chip.icon} />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="store-section" aria-label="Download Folk VPN">
        <div className="store-bento">
          {storeCards.map((card) => (
            <article
              className="store-card reveal cursor-pointer rounded-[20px] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_var(--shadow)]"
              key={card.title}
            >
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

      <section
        aria-label="Works on WiFi, 4G, 5G, LTE and public hotspots"
        className="flex overflow-hidden border-y border-white/10 bg-surface mask-[linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden="true"
            className="flex shrink-0 motion-safe:animate-marquee"
          >
            {networks.map((network) => (
              <span
                key={network}
                className="inline-flex items-center gap-10 px-5 py-[22px] font-mono text-[15px] whitespace-nowrap text-muted after:size-1.5 after:rounded-full after:bg-brand after:content-['']"
              >
                {network}
              </span>
            ))}
          </div>
        ))}
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
            <article
              className="feature-panel reveal cursor-pointer rounded-2xl transition duration-200 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_50px_var(--shadow)] [&_.icon]:box-content [&_.icon]:rounded-xl [&_.icon]:bg-brand/12 [&_.icon]:p-3 [&_.icon]:text-brand-deep"
              key={feature.title}
            >
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
            <article
              className="protocol-card reveal cursor-pointer rounded-2xl transition duration-200 hover:translate-x-1.5 hover:shadow-[inset_4px_0_0_0_var(--color-brand),0_18px_40px_var(--shadow)]"
              key={protocol.name}
            >
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
                <dt className="text-[34px] text-brand">{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="reveal relative mx-3.5 my-12 flex flex-col items-center overflow-hidden rounded-[20px] border border-white/10 bg-surface bg-[radial-gradient(50%_80%_at_50%_0%,rgb(49_213_111/0.35),transparent_70%)] px-6 py-14 text-center text-white md:mx-auto md:my-16 md:w-[calc(100%-56px)] md:max-w-[1240px] md:rounded-[28px] md:py-24">
        <h2 className="mb-3 text-[clamp(34px,5vw,60px)] tracking-tight text-white">
          Go quiet in one tap.
        </h2>
        <p className="m-0 text-lg text-white/70">
          Available on Android today. iPhone and Mac are on the way.
        </p>
        <a
          className="mt-9 block w-[202px] rounded-[10px] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgb(49_213_111/0.3)] active:scale-95"
          href={playStoreUrl}
          target="_blank"
          aria-label="Get Folk VPN on Google Play"
        >
          <img src={googlePlayBadge} alt="" className="w-full" />
        </a>
      </section>

      <Footer />
    </main>
  )
}

export default HomePage
