import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <p>MON TEST</p>
      <p>process.env.TEST</p>
    </>
  );
}
