import { useState, useRef, useEffect } from 'react'
import './App.css'
import partnerLogo from './assets/partner-logo.jpg'
import partnerLogoDad from './assets/partner-logo-dad.png'
import partnerLogoShrmz from './assets/official-partner-shrmz.jpg'
import nannaLogo from './assets/nobg.png'

function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Imposta video come muto PRIMA di tutto
    video.muted = true
    video.volume = 0
    video.setAttribute('muted', '')
    
    const forcePlay = async () => {
      if (video.paused) {
        try {
          // Assicurati che sia muto prima di play
          video.muted = true
          video.volume = 0
          await video.play()
          console.log('Video play() succeeded')
          setVideoReady(true)
        } catch (error) {
          console.error('Video play() failed:', error)
        }
      }
    }
    
    // Prova quando il video è pronto
    const tryPlay = () => {
      video.muted = true
      video.volume = 0
      forcePlay()
    }
    
    video.addEventListener('loadeddata', tryPlay)
    video.addEventListener('canplay', tryPlay)
    video.addEventListener('canplaythrough', tryPlay)
    video.addEventListener('loadedmetadata', () => {
      video.muted = true
      video.volume = 0
      tryPlay()
    })
    
    // Prova immediatamente
    tryPlay()
    
    // Retry ogni 300ms se è ancora in pausa
    const retryInterval = setInterval(() => {
      if (video.paused) {
        tryPlay()
      } else {
        clearInterval(retryInterval)
      }
    }, 300)
    
    // Quando la pagina diventa visibile, riprova
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        tryPlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    // Cattura QUALSIASI interazione per sbloccare il video
    const unlock = (e) => {
      e.preventDefault()
      video.muted = true
      video.volume = 0
      forcePlay()
    }
    
    // Eventi multipli per mobile
    document.addEventListener('touchstart', unlock, { once: true, passive: false })
    document.addEventListener('touchend', unlock, { once: true, passive: false })
    document.addEventListener('click', unlock, { once: true })
    document.addEventListener('mousedown', unlock, { once: true })
    
    // Cleanup
    return () => {
      clearInterval(retryInterval)
      video.removeEventListener('loadeddata', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('canplaythrough', tryPlay)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('touchstart', unlock)
      document.removeEventListener('touchend', unlock)
      document.removeEventListener('click', unlock)
      document.removeEventListener('mousedown', unlock)
    }
  }, [])

  // URL del video su Cloudflare R2
  const videoUrl = 'https://pub-40c99f2d54fd492fbef50adca7fecc1b.r2.dev/promo1.mp4'

  const handleOverlayClick = async (e) => {
    e.preventDefault()
    const video = videoRef.current
    if (video && video.paused) {
      video.muted = true
      video.volume = 0
      try {
        await video.play()
        setVideoReady(true)
      } catch (error) {
        console.error('Video play failed:', error)
      }
    }
  }

  return (
    <div className="app">
      {!videoReady && (
        <div 
          className="video-overlay"
          onTouchStart={handleOverlayClick}
          onTouchEnd={handleOverlayClick}
          onClick={handleOverlayClick}
        />
      )}
      <video
        ref={videoRef}
        className="background-video"
        src={videoUrl}
        autoPlay
        loop
        playsInline
        preload="auto"
        muted={true}
        webkit-playsinline="true"
        x5-playsinline="true"
        onLoadedData={(e) => {
          e.target.muted = true
          e.target.volume = 0
          e.target.setAttribute('muted', '')
          e.target.play().catch(() => {})
        }}
        onCanPlay={(e) => {
          e.target.muted = true
          e.target.volume = 0
          e.target.setAttribute('muted', '')
          e.target.play().catch(() => {})
        }}
        onPlaying={() => {
          setVideoReady(true)
        }}
        onError={(e) => {
          console.error('Video error:', e.target.error)
        }}
        onLoadStart={() => {
          console.log('Video loading started')
        }}
      >
        Your browser does not support the video tag.
      </video>
      <div className="main-header">
        <button 
          className="about-button"
          onClick={() => setShowAbout(!showAbout)}
        >
          {showAbout ? 'CLOSE' : 'ABOUT'}
        </button>
      </div>

      <div className="center-title">
        <img src={nannaLogo} alt="Magic Nanna Labs" className="nanna-logo" />
      </div>

      {showAbout && (
        <div className="about-panel">
          <div className="about-content">
            <p className="about-text">
              Magic Nanna Labs team members have been cooking on the internet long before AI hype cycles and viral threads. We're children of early web culture, self-taught, over-skilled, and battle-tested by years of creating and experimenting.
              <br /><br />
              Along the way, we've crafted video content for leading Web3 projects, delivering visuals that hit hard and stand out across the ecosystem.
              <br /><br />
              <strong>We don't follow templates. We don't recycle styles</strong> Everything we make is crafted from scratch with intention — visuals, edits, animations, SFX, music, pacing, storytelling.
              <br /><br />
              If it's on screen, we shaped it. If it's heard, we designed it. Full control, A to Z.
              <br /><br />
              Like a legendary Nanna in the kitchen, we mix intuition with technical mastery, stirring ideas until they hit that perfect flavor.
              <br /><br />
              Our studio blends cinematic video production, cutting-edge AI, custom tooling, and original sound design crafted in-house by our producers.
              <br /><br />
              <strong>Contact:</strong><br />
              <a href="mailto:magicnannastudio@protonmail.com" className="text-link">magicnannastudio@protonmail.com</a>
              <br /><br />
              <a href="https://x.com/magicnannalabs" target="_blank" rel="noopener noreferrer" className="text-link">X: @magicnannalabs</a>
              <br /><br />
              <strong>Official Partners:</strong>
              <br />
              <div className="about-partners">
                <a href="https://x.com/Liquidmintxyz" target="_blank" rel="noopener noreferrer" className="partner-link-about">
                  <img src={partnerLogo} alt="Liquidmint" className="partner-logo-about" />
                </a>
                <a href="https://x.com/DADstudioxyz" target="_blank" rel="noopener noreferrer" className="partner-link-about">
                  <img src={partnerLogoDad} alt="DAD Studio" className="partner-logo-about" />
                </a>
                <a href="https://x.com/ShroomiezNFTs" target="_blank" rel="noopener noreferrer" className="partner-link-about">
                  <img src={partnerLogoShrmz} alt="Shroomiez" className="partner-logo-about" />
                </a>
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
