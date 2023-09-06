import Link from "next/link"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className="footer">
        {/* <p>
          <Link href="/">Text</Link>
          <Link href="/art">Art</Link>
        </p> */}
       <div class="logo-holder logo-6">
       <p>ishan tech</p>
       </div>
      </div>
    </>
  )
}
