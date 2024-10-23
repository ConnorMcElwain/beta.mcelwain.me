// These styles apply to every route in the application
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { FormspreeProvider } from '@formspree/react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
