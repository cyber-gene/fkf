;(function () {
  const STORAGE_KEY = 'ga_consent'
  const GA_SCRIPT_ID = 'ga-gtag-script'
  const banner = document.getElementById('cookie-banner')
  const gaMeasurementId = banner?.dataset.gaId
  let gaLoaded = false

  if (!gaMeasurementId) return

  function loadGA() {
    if (gaLoaded) return

    if (!document.getElementById(GA_SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = GA_SCRIPT_ID
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
      document.head.appendChild(script)
    }

    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments)
      }
    window.gtag('js', new Date())
    window.gtag('config', gaMeasurementId)
    gaLoaded = true
  }

  function hideBanner() {
    if (banner) banner.classList.add('hidden')
  }

  function showBanner() {
    if (banner) banner.classList.remove('hidden')
  }

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY)
    } catch {
      return null
    }
  }

  function saveConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
  }

  const stored = getConsent()
  if (stored === 'granted') {
    loadGA()
  } else if (stored !== 'denied') {
    showBanner()
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    saveConsent('granted')
    hideBanner()
    loadGA()
  })

  document.getElementById('cookie-decline')?.addEventListener('click', () => {
    saveConsent('denied')
    hideBanner()
  })
})()
