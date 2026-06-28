(function () {
  const GA_ID = window.STAMMTISCH_GA_ID || 'G-LELECKYNXW';
  const STORAGE_KEY = window.STAMMTISCH_ANALYTICS_CONSENT_KEY || 'stammtisch_analytics_consent';
  const existing = localStorage.getItem(STORAGE_KEY);

  window[`ga-disable-${GA_ID}`] = existing !== 'granted';

  function configureAnalytics() {
    window[`ga-disable-${GA_ID}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('config', GA_ID);
  }

  function denyAnalytics() {
    window[`ga-disable-${GA_ID}`] = true;
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  }

  function injectStyles() {
    if (document.getElementById('stammtisch-cookie-consent-styles')) return;
    const style = document.createElement('style');
    style.id = 'stammtisch-cookie-consent-styles';
    style.textContent = `
      .cookie-consent {
        position: fixed;
        left: 16px;
        right: 16px;
        bottom: 16px;
        z-index: 2000;
        max-width: 860px;
        margin: 0 auto;
        padding: 16px;
        border: 1px solid rgba(255,255,255,0.28);
        border-radius: 16px;
        background: rgba(25, 22, 62, 0.94);
        color: white;
        box-shadow: 0 18px 50px rgba(0,0,0,0.34);
        backdrop-filter: blur(16px);
        display: flex;
        gap: 14px;
        align-items: center;
        justify-content: space-between;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .cookie-consent p { margin: 0; line-height: 1.45; font-size: 0.95rem; }
      .cookie-consent a { color: white; text-decoration: underline; }
      .cookie-consent__actions { display: flex; gap: 8px; flex-shrink: 0; }
      .cookie-consent button,
      .cookie-settings-button {
        border: 0;
        border-radius: 999px;
        padding: 10px 14px;
        font-weight: 800;
        cursor: pointer;
        color: #332d7a;
        background: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .cookie-consent button.secondary {
        color: white;
        background: rgba(255,255,255,0.16);
        border: 1px solid rgba(255,255,255,0.3);
      }
      .cookie-settings-button {
        position: fixed;
        left: 16px;
        bottom: 16px;
        z-index: 1999;
        padding: 8px 12px;
        font-size: 0.82rem;
        color: white;
        background: rgba(25, 22, 62, 0.7);
        border: 1px solid rgba(255,255,255,0.24);
        box-shadow: 0 10px 28px rgba(0,0,0,0.22);
        backdrop-filter: blur(12px);
      }
      @media (max-width: 680px) {
        .cookie-consent { flex-direction: column; align-items: stretch; }
        .cookie-consent__actions { width: 100%; }
        .cookie-consent button { flex: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  function removeExistingBanner() {
    const current = document.querySelector('.cookie-consent');
    if (current) current.remove();
  }

  function showSettingsButton() {
    if (document.querySelector('.cookie-settings-button')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cookie-settings-button';
    button.textContent = 'Analytics settings';
    button.addEventListener('click', function () {
      showBanner(true);
    });
    document.body.appendChild(button);
  }

  function showBanner(isSettings) {
    removeExistingBanner();
    injectStyles();
    const banner = document.createElement('section');
    banner.className = 'cookie-consent';
    banner.setAttribute('aria-label', 'Analytics consent');
    banner.innerHTML = `
      <p>${isSettings ? 'Manage analytics for Stammtisch.' : 'We use privacy-friendly analytics to improve Stammtisch.'} Analytics stays off unless you accept. See our <a href="/privacy.html">Privacy Policy</a>.</p>
      <div class="cookie-consent__actions">
        <button type="button" class="secondary" data-consent="denied">${isSettings ? 'Turn off' : 'No thanks'}</button>
        <button type="button" data-consent="granted">Accept analytics</button>
      </div>
    `;
    document.body.appendChild(banner);

    banner.addEventListener('click', function (event) {
      const target = event.target.closest('button[data-consent]');
      if (!target) return;
      const value = target.getAttribute('data-consent');
      localStorage.setItem(STORAGE_KEY, value);
      if (value === 'granted') configureAnalytics();
      else denyAnalytics();
      banner.remove();
      showSettingsButton();
    });
  }

  injectStyles();
  if (existing === 'granted') {
    configureAnalytics();
    showSettingsButton();
    return;
  }
  denyAnalytics();
  if (existing === 'denied') {
    showSettingsButton();
    return;
  }
  showBanner(false);
}());
