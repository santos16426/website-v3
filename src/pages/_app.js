import "@/app/styles/globals.css";
import Head from "next/head";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Lucas | Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
