import styles from "./styles.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* PWA and App Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="application-name" content="Wenlei Dai - Personal Website" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Wenlei Dai" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Theme and Color Meta Tags */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Icons */}
      <link rel="icon" href="/images/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon.ico"
      />
      <link rel="apple-touch-icon" href="/images/zhugeliang_aboutme.png" />

      {/* Styles */}
      <link rel="stylesheet" href={styles} />
      <link rel="modulepreload" href="/src/client.tsx" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* including this within the head to prevent FOUC */}
      <script type="text/javascript">
        document.documentElement.classList.toggle( "dark", localStorage.theme
        === "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches), );
      </script>
    </head>
    <body>
      <div id="root">{children}</div>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
