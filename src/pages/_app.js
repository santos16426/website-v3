import "@/app/styles/globals.scss";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Lucas | Software Engineer</title>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
