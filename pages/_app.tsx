// These styles apply to every route in the application
import '../styles/global.css';
import { FormspreeProvider } from '@formspree/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
