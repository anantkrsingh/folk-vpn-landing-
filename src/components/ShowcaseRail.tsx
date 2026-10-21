import homeScreen from '../assets/folk-home.png'
import serverScreen from '../assets/folk-servers.png'
import dnsScreen from '../assets/folk-dns.png'
import protocolScreen from '../assets/folk-protocol.png'

const screenShots = [
  {
    src: homeScreen,
    alt: 'Folk VPN home connection screen',
    title: 'One tap to connect',
    copy: 'The home screen is just your connection state and a single button. Nothing to configure first.',
  },
  {
    src: serverScreen,
    alt: 'Server choices in Folk VPN',
    title: 'Pick a location',
    copy: 'Switch between servers in Japan, India, Singapore and more from a simple sheet.',
  },
  {
    src: dnsScreen,
    alt: 'DNS choices in Folk VPN',
    title: 'DNS you control',
    copy: 'Automatic, Google, Cloudflare, Cloudflare Family, or Quad9. Change it whenever you like.',
  },
  {
    src: protocolScreen,
    alt: 'Protocol choices in Folk VPN',
    title: 'Switch protocols',
    copy: 'WireGuard for speed, AmneziaWG and Xray when a network tries to block you.',
  },
]

// Each card is sticky a little lower than the last, so they pile up as you scroll.
function ShowcaseRail() {
  return (
    <section id="screens" className="border-t border-white/10 px-3.5 py-16 md:px-7 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <p className="section-kicker">Inside the app</p>
        <h2 className="mb-10 max-w-[640px] md:mb-14">Every screen does one job.</h2>
        <div className="flex flex-col gap-8">
          {screenShots.map((screen, index) => (
            <article
              key={screen.alt}
              className="sticky grid h-[min(620px,calc(100svh-120px))] grid-rows-[auto_1fr] items-center gap-6 overflow-hidden rounded-[28px] border border-white/10 bg-surface p-6 shadow-[0_-16px_50px_rgb(0_0_0/0.6)] md:grid-cols-2 md:grid-rows-1 md:p-12"
              style={{ top: `${88 + index * 24}px` }}
            >
              <div>
                <span className="font-mono text-sm font-bold text-brand-deep">
                  0{index + 1}
                </span>
                <h3 className="mt-2 mb-3 text-2xl md:text-4xl">{screen.title}</h3>
                <p className="m-0 max-w-[420px] text-base leading-relaxed text-muted md:text-lg">
                  {screen.copy}
                </p>
              </div>
              <figure className="m-0 h-full min-h-0 justify-self-center">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="h-full w-auto rounded-[36px] border-[6px] border-black object-cover"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseRail
