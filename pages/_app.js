import '../styles/globals.css';
import '../styles/components.css';
import '../styles/bg.css';
import '../styles/about.css';
import '../styles/casestudy.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
