import {AppProps} from 'next/app'
import Navbar from '../components/Navbar'
import { SessionProvider } from "next-auth/react"
import {GlobalStyle} from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <SessionProvider session={pageProps.session}>
    <GlobalStyle/>
    <Navbar/>
    <Component {...pageProps} />
  </SessionProvider>
  </>
  )
}

export default MyApp;
