import Footer from '../components/Footer'
import Header from '../components/Header'

const termsSections = [
  {
    title: 'Acceptance of terms',
    body: 'By downloading, installing, or using Folk VPN, you agree to these Terms of Service. If you do not agree, do not use the app. These terms apply to the app, website, and related support channels provided by Hotshot Labs.',
  },
  {
    title: 'The service',
    body: 'Folk VPN provides encrypted VPN connectivity through protocols such as WireGuard, AmneziaWG, and Xray, along with configurable DNS options. Server locations, protocols, and features may change, and we may add, modify, or remove features at any time.',
  },
  {
    title: 'Accounts',
    body: 'You can use Folk VPN without an account. If you create one, you are responsible for keeping your login credentials secure and for all activity under your account. Provide accurate information and let us know promptly if you suspect unauthorized access.',
  },
  {
    title: 'Acceptable use',
    body: 'You agree not to use Folk VPN for unlawful activity, including fraud, distributing malware, sending spam, infringing intellectual property, harassing others, or accessing systems without authorization. You may not attempt to disrupt, overload, reverse engineer, or resell the service. We may suspend or terminate access for violations.',
  },
  {
    title: 'Subscriptions and purchases',
    body: 'Some features may require an in-app purchase or subscription billed through Google Play or the App Store. Pricing is shown before purchase. Subscriptions renew automatically unless cancelled in your store account settings before the renewal date. Refunds are handled according to the applicable store’s policies.',
  },
  {
    title: 'Ads',
    body: 'The free version of Folk VPN may display ads provided by third-party advertising networks. Your interactions with advertisers are solely between you and them.',
  },
  {
    title: 'Local laws',
    body: 'VPN use is restricted or regulated in some countries. You are responsible for ensuring your use of Folk VPN complies with the laws where you live or travel.',
  },
  {
    title: 'Disclaimer of warranties',
    body: 'Folk VPN is provided “as is” and “as available” without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, available in every location, or able to bypass every network restriction.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the maximum extent permitted by law, Hotshot Labs is not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or revenue arising from your use of, or inability to use, the service.',
  },
  {
    title: 'Termination',
    body: 'You can stop using Folk VPN at any time and request account deletion from the Delete Account page. We may suspend or end your access if you violate these terms or if we discontinue the service.',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms from time to time. Continued use of Folk VPN after changes take effect means you accept the updated terms.',
  },
  {
    title: 'Contact',
    body: 'For questions about these terms, email kavachinnovation@gmail.com. These terms were last updated on October 21, 2026.',
  },
]

function TermsPage() {
  return (
    <main className="privacy-page">
      <Header />
      <section className="privacy-hero">
        <p className="eyebrow">Terms of Service</p>
        <h1>Folk VPN terms of service</h1>
        <p>
          These terms explain the rules for using Folk VPN, the app, and related
          support channels.
        </p>
      </section>
      <section className="policy-list">
        {termsSections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default TermsPage
