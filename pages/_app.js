import Head from "next/head";
import Layout from "../components/layout";
import { CartProvider } from "../context/cart-context";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MoStore</title>
        <link rel="icon" href="/store-icon.png" />
      </Head>
      <CartProvider>
        <Layout>
          <NextNProgress height={5} color="#333" />
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  );
}

export default MyApp;
