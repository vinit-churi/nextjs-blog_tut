import "../styles/globals.css";
export default function App({ Component, pageProps }) {
    console.log("what exactly is going on here", Component, pageProps);
    return <Component {...pageProps} />;
}
