import Document, { Html, Head, Main, NextScript } from "next/document"
import CONFIG from "site.config"
import CJK from "@libs/cjk"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link
            rel="stylesheet"
            as="font"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <meta name="naver-site-verification" content="60dcc02589e9f34eae87c7e95d7e4420276c293e" />
          <meta name="google-site-verification" content="N_a4lc-vqlXkbXwlDbdT2Qdl2svx67b6woIEHte2kr4" />
          <link rel="icon" href="/star.png" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/star.png"
          ></link>
           <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">  
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {/* theme setting */}
          <meta name="theme-color" content={"#f1f3f5"} />

          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
