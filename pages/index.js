// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="hero-section">
          <div className="hero-container">
            <div className="hero-header">
              <h4 className="text-4xl font-bold text-gray-900 dark:text-white">
                product designer
              </h4>
              <h1 className="mt-4 text-xl">
                designing for users, <br />not just pixels.
              </h1>
              <div className="mt-8 flex gap-4">
                <button className="button-primary">
                  Button 1
                </button>
                <button className="button-secondary">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="section-txt-img-center">

          </div>
          <div className="section-txt-img-left">
            
          </div>
          <div className="section-txt-img-right">
            
          </div>
        </div>
      </main>
    </div>
  );
}
