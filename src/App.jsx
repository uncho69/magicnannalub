import './App.css'
import logo from './assets/logo.png'
import partnerLogo from './assets/partner-logo.jpg'
import partnerLogoDad from './assets/partner-logo-dad.png'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="banner">
          <div className="logo-wrapper">
            <img src={logo} alt="Magic Nanna Labs Logo" className="logo" />
          </div>
          <h1 className="studio-name">Magic Nanna Labs</h1>

          <div className="partner-strip">
            <span className="partner-label">Official Partners</span>
            <div className="partner-logos">
              <a
                href="https://x.com/Liquidmintxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <img
                  src={partnerLogo}
                  alt="Official partner: Liquidmint"
                  className="partner-logo"
                />
              </a>
              <a
                href="https://x.com/DADstudioxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <img
                  src={partnerLogoDad}
                  alt="Official partner: DAD Studio"
                  className="partner-logo"
                />
              </a>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://x.com/magicnannalabs" target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          
          <div className="email-wrapper">
            <a href="mailto:magicnannastudio@protonmail.com" className="email-link">magicnannastudio@protonmail.com</a>
          </div>
        </div>
        
        <div className="description-section">
          <div className="description-border-top"></div>
          <div className="description-wrapper">
            <p className="description-text">
              Magic Nanna Labs team members have been cooking on the internet long before AI hype cycles and viral threads. We're children of early web culture, self-taught, over-skilled, and battle-tested by years of creating and experimenting.
              <br /><br />
              Along the way, we've crafted video content for leading <a href="https://x.com/berachain" target="_blank" rel="noopener noreferrer" className="text-link">Berachain</a> projects, delivering visuals that hit hard and stand out across the ecosystem.
              <br /><br />
              <strong>We don't follow templates. We don't recycle styles</strong> Everything we make is crafted from scratch with intention — visuals, edits, animations, SFX, music, pacing, storytelling.
              <br /><br />
              If it's on screen, we shaped it. If it's heard, we designed it. Full control, A to Z.
              <br /><br />
              Like a legendary Nanna in the kitchen, we mix intuition with technical mastery, stirring ideas until they hit that perfect flavor.
              <br /><br />
              Our studio blends cinematic video production, cutting-edge AI, custom tooling, and original sound design crafted in-house by our producers.
            </p>
          </div>
          <div className="description-border-bottom"></div>
        </div>
        
        <div className="remember-wrapper">
          <p className="remember-text">AND REMEMBER</p>
        </div>
        
        <div className="tagline-wrapper">
          <p className="tagline-text">
            Nonna's kitchen always cooks<br />
            up something crazy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
