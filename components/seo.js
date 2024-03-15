import Head from "next/head"

export default function SEO({
  title = "Shababul Alam",
  og = "og.png",
  description = "Shababul Alam is a frontend engineer who creates human-centered web solutions.",
}) {
  const siteTitle = "Shababul Alam"

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Shababul Alam" />
      <meta
        property="og:image"
        content={`https://shababulalam.com/images/meta/${og}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="twitter:image"
        content={`https://shababulalam.com/images/meta/${og}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="shababulalam" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link
        href="https://shababulalam.com/images/meta/apple-touch-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="https://shababulalam.com/images/meta/apple-touch-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="https://shababulalam.com/images/meta/apple-touch-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />

      <link
        href="https://shababulalam.com/images/meta/apple-touch-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        rel="apple-touch-icon"
        href="https://shababulalam.com/images/meta/apple-touch-icon-60x60.png"
      />
      <link
        href="https://shababulalam.com/images/meta/apple-touch-icon-120x120.png"
        sizes="60x60"
        rel="apple-touch-icon"
      />
      <link
        href="https://shababulalam.com/images/meta/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="https://shababulalam.com/images/meta/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="https://shababulalam.com/images/meta/favicon-48x48.png"
        rel="icon"
        sizes="48x48"
        type="image/png"
      />

      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for shababulalam.com"
        href="/feed.xml"
      />
    </Head>
  )
}
