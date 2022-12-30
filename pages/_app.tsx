import '../styles/globals.sass'
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
