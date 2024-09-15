import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Link from 'next/link';
import '@ptkdev/webcomponent-patreon-box';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet" />
        <title>Anime Euphoria</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/cyberfavicon.png" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Index
            </Link>
          </li>
          <li>
            <Link href="/register">
              Registrar
            </Link>
          </li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
