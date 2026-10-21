import Footer from '../components/Footer'
import Header from '../components/Header'

function DeleteAccountPage() {
  return (
    <main className="privacy-page">
      <Header />
      <section className="privacy-hero">
        <p className="eyebrow">Account Management</p>
        <h1>Delete your account</h1>
        <p>
          You can request permanent deletion of your Folk VPN account and all
          associated personal data at any time.
        </p>
      </section>
      <section className="policy-list delete-account-content">
        <article>
          <h2>How to request deletion</h2>
          <p>
            Send an email to{' '}
            <a href="mailto:kavachinnovation@gmail.com?subject=Delete%20My%20Account">
              kavachinnovation@gmail.com
            </a>{' '}
            with the subject line <strong>"Delete My Account"</strong>. Include
            the email address associated with your account so we can locate and
            remove your data.
          </p>
        </article>
        <article>
          <h2>What gets deleted</h2>
          <p>
            Upon a verified request, we will permanently delete your account
            credentials, profile information (name and email), and any
            account-linked preferences or subscription records. Data that has
            been anonymised or aggregated for analytics purposes cannot be
            individually identified or removed.
          </p>
        </article>
        <article>
          <h2>How long it takes</h2>
          <p>
            We will confirm receipt of your request and complete the deletion
            within <strong>30 days</strong>. You will receive a confirmation
            email once your account and data have been removed.
          </p>
        </article>
        <article>
          <h2>Using the app without an account</h2>
          <p>
            Folk VPN works without an account. If you prefer not to delete your
            account right now, you can simply stop using the app. Your VPN
            connection is never tied to your account status.
          </p>
        </article>
      </section>
      <section className="policy-note delete-cta">
        <h2>Ready to delete?</h2>
        <p>
          Email us at{' '}
          <a href="mailto:kavachinnovation@gmail.com?subject=Delete%20My%20Account">
            kavachinnovation@gmail.com
          </a>{' '}
          with the subject <strong>"Delete My Account"</strong> and we'll take
          care of the rest.
        </p>
      </section>
      <Footer />
    </main>
  )
}

export default DeleteAccountPage
