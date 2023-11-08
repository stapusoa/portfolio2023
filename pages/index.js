// pages/index.js
import Head from 'next/head';
import Image from 'next/image';


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
              <h4 className="text-left">
                product designer
              </h4>
              <h1 className="text-left">
                designing for users, <br />not just pixels.
              </h1>
              <div className="button-double-container">
                <button className="button-primary">
                  projects
                </button>
                <button className="button-secondary">
                  github
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="section-txt-img-center">
            <h5 className="text-center">
                fishbowl go
            </h5>
            <h3 className="text-center">
              simplifying inventory management in the warehouse and in the office.
            </h3>
            <div className="proj1-img-container">
              <Image
                  src="/project-image-1-fb.png" // The path to your image file, relative to the public directory
                  alt="Project Image" // Alternative text for the image
                  width={900} // The width of the image in pixels
                  height={300} // The height of the image in pixels
                  layout="intrinsic" // Optional: Defines how the image should be resized and positioned
                />   
            </div>
             

          </div>
          <div className="section-txt-img-left">
            <div className="proj-text-container">
              <h5 className="text-left">
                quarium hosting
              </h5>
              <h3 className="text-left">
                hosting business financials and records in one place.              </h3>
            </div>
            
            <div className="proj2-img-container">
              <Image
                  src="/project-image-2-q.png" // The path to your image file, relative to the public directory
                  alt="Project Image" // Alternative text for the image
                  width={700} // The width of the image in pixels
                  height={300} // The height of the image in pixels
                  layout="intrinsic" // Optional: Defines how the image should be resized and positioned
                />   
            </div>
            
          </div>
          <div className="section-txt-img-right">
            
            
            <div className="proj3-img-container">
              <Image
                  src="/project-image-3-tp.png" // The path to your image file, relative to the public directory
                  alt="Project Image" // Alternative text for the image
                  width={700} // The width of the image in pixels
                  height={300} // The height of the image in pixels
                  layout="intrinsic" // Optional: Defines how the image should be resized and positioned
                />   
            </div>

            <div className="proj-text-container">
              <h5 className="text-right">
                travelpass
              </h5>
              <h3 className="text-right">
                providing the explorer at heart unforgettable adventures.              </h3>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
