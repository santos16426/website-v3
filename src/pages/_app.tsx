import Head from "next/head";
import { NextComponentType } from "next";
import "@/app/styles/globals.scss";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Lucas | Software Engineer</title>
        <link rel='icon' href='/images/icons/logo.svg' type='image/svg+xml' />
        <meta
          name='google-site-verification'
          content='WIuJFRN2EcEe7Vk-pU2GhsSYylgHo-WoR4WNqrT6lqs'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
