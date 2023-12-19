import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';
import Layout from "../components/layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="slides-icon.png"/>
        <title>Victoria's Slide Site</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
