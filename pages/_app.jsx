import Head from "next/head";
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
// import Preloader from "../components/PreLoader";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(false)
  // })
  return (
    <>
      <Head>
        <title>EduAlert</title>
        <meta charSet="utf-8" />
        <meta content="IE=Edge" httpEquiv="x-ua-compatible" />
        <meta name="theme-color" content="#fffff" />
        <meta property="og-type" content="website" />
        <meta property="og:site_name" content="EduAlert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "Poppins , sans-serif",
          components: {
            Input: {
              styles: (theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: "#1f7a1f",
                  },
                },
              }),
            },
          },
        }}
      >
       <Component {...pageProps} /> 
      
      </MantineProvider>
    </>
  );
}

export default MyApp;
