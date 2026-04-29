const GTM_ID = 'GTM-M5ZP9433';
const GTAG_ID = 'AW-17958922166';

export const GTMHead = () => (
  <>
    {/* Google Tag (gtag.js) Library */}
    <script 
      async 
      src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} 
    />
    
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Initialize dataLayer
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Configure gtag
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');

          // Initialize GTM
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  </>
);

export const GTMBody = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);