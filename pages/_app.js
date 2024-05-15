import "@/styles/fonts.css"
import "@/styles/styles.css"

import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
