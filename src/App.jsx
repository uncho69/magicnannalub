import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="banner">
          <div className="logo-wrapper">
            <img src={logo} alt="Magic Nanna Labs Logo" className="logo" />
          </div>
          <h1 className="studio-name">Magic Nanna Labs</h1>
          
          <div className="social-icons">
            <a href="https://x.com/magicnannalabs" target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="description-section">
          <div className="description-border-top"></div>
          <div className="description-wrapper">
            <p className="description-text">
              Magic Nanna Labs (MNL) has produced video content for leading <a href="https://x.com/berachain" target="_blank" rel="noopener noreferrer" className="text-link">Berachain</a> projects, delivering visuals that stand out and leave a mark. Our creative approach is never confined — we don't stick to a single style, formula, or direction. We create freely, wildly, and instinctively.
              <br /><br />
              Just like a legendary Nonna in the kitchen, we mix unexpected ingredients, stir ideas with intuition, and serve bangers that nobody sees coming. Our work blends cinematic video production with cutting-edge AI, custom visual tools, and even original sound and music creation, all crafted in-house.
              <br /><br />
              This is where experimentation meets taste. We let ideas simmer, add flavor, and shape every project by hand. Nothing stiff, nothing recycled, just bold work that feels alive. At Magic Nanna Labs, the pot never stops boiling, and the results are always crazy good.
            </p>
          </div>
          <div className="description-border-bottom"></div>
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
