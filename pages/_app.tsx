import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>ImaliPay</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="description"
          content="Fintech as a Service for African Digital Businesses & Marketplaces"
          key="desc"
        />
      </Head>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          backgroundColor: '#86B435',
          color: '#fff',
          fontSize: '13px',
          padding: '5px 20px'
        }}
        expires={150}
        enableDeclineButton
        declineButtonText="Decline"
        declineButtonStyle={{
          backgroundColor: 'transparent',
          color: '#fff',
          fontSize: '13px',
          border: '1px solid red',
          padding: '5px 15px'
        }}
        onDecline={() => {
          console.log('cookie declined');
        }}>
        This website uses cookies to enhance the user experience.{' '}
        <span style={{ fontSize: '12px' }}></span>
      </CookieConsent>
    </Layout>
  );
}
