import Footer from '../components/Footer'
import Header from '../components/Header'

const privacySections = [
  {
    title: 'Information we collect',
    body: 'Folk VPN can be used without an account, or you may choose to create one using your name, email address, and password, or by signing in with Google. When you create an account, we collect the information you provide during registration. The app may also receive limited device, app performance, diagnostics, and advertising identifiers through platform services so the app can run, measure stability, and support ads or purchases.',
  },
  {
    title: 'Account creation and authentication',
    body: 'You may register with an email address and password, or use Google Sign-In. If you use Google Sign-In, we receive your name and email address from Google as permitted by your Google account settings. Passwords are stored using industry-standard hashing and are never stored in plain text. You can use Folk VPN without creating an account at any time.',
  },
  {
    title: 'How we use information',
    body: 'We use your account information to provide VPN connectivity, manage your subscription or preferences, keep the app reliable, prevent abuse, understand crashes, show ads where applicable, and process in-app purchases. We do not sell your personal information or browsing activity.',
  },
  {
    title: 'VPN traffic and logs',
    body: 'We do not intentionally record the websites you visit, the content you access, or the files you transfer while connected. Some temporary technical data may be processed only as needed to operate and secure the VPN service.',
  },
  {
    title: 'Third-party services',
    body: 'Folk VPN may use services from Google (authentication and Play), advertising networks, analytics providers, payment processors, DNS providers, and infrastructure partners. Their processing is governed by their own privacy terms.',
  },
  {
    title: 'Account deletion',
    body: 'You can request deletion of your account and associated personal data at any time by emailing kavachinnovation@gmail.com with the subject line "Delete My Account". We will process your request and confirm deletion within 30 days.',
  },
  {
    title: 'Children and families',
    body: 'The app is intended for a general audience. If you believe a child has provided personal information to us, contact us so we can review and delete it where required.',
  },
  {
    title: 'Contact',
    body: 'For privacy questions, support, or deletion requests, email kavachinnovation@gmail.com. This policy was last updated on October 20, 2026.',
  },
]

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <Header />
      <section className="privacy-hero">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Folk VPN privacy policy</h1>
        <p>
          This policy explains how Folk VPN handles information when you use the
          app and related support channels.
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
      <Footer />
    </main>
  )
}

export default PrivacyPage
