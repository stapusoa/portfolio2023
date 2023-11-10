import '../styles/globals.css';
import '../styles/components.css';
import '../styles/bg.css';
import '../styles/about.css';
import '../styles/casestudy.css';

import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
