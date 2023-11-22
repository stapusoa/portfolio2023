// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import MyLink from '../components/MyLink';
import ButtonPrimary from '../components/ButtonPrimary';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="page-container">
          <div className="hero-bg-home">
            <div className="hero-wrapper">
              <div className="hero-content">
                <div className="hero-header">
                  <h4 className="text-left text-color-primary">
                    product designer
                  </h4>
                  <h1 className="text-left text-color-secondary">
                    designing for users, <br />not just pixels.
                  </h1>
                </div>
                <div className="button-double-container">
                  <ButtonPrimary className="button-primary">
                    projects
                  </ButtonPrimary>                
                  <button className="button-secondary" onClick={() => window.open('https://github.com/yourusername', '_blank', 'noopener,noreferrer')}>
                    github
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content" id="projects-section">
              <div className="section grid-x vertical-center gap-4">
                <div className="proj-img-container">
                  <Image
                      src="/fbprod-project-image.jpg" // The path to your image file, relative to the public directory
                      alt="Project Image" // Alternative text for the image
                      layout="fill"
                      objectFit="cover"
                  />   
                </div>
                <div className="col text-block">
                  <h5 className="text-left text-color-default">
                    fishbowl go
                  </h5>
                  <h3 className="text-left text-color-secondary">
                    simplifying inventory management in the warehouse and in the office.
                  </h3>
                  <div className="align-left">
                    <MyLink className="my-link" href="/proj1">case study </MyLink>
                  </div>
                </div>
              </div>
              <div className="section grid-x vertical-center gap-4">
                <div className="col text-block">
                  <h5 className="text-right text-color-default">
                    haven massage
                  </h5>
                  <h3 className="text-right text-color-secondary">
                    providing professional therapeutic services through easy booking.            
                  </h3>
                  <div className="align-right">
                    <MyLink className="my-link" href="/proj2">case study </MyLink>
                  </div>
                </div>
                <div className="proj-img-container">
                  <Image
                      src="/hm-project-img.jpg" // The path to your image file, relative to the public directory
                      alt="Project Image" // Alternative text for the image
                      layout="fill"
                      objectFit="cover"
                  />   
                </div>
              </div>
              <div className="section grid-x vertical-center gap-4">
                <div className="proj-img-container">
                  <Image
                      src="/tp-project-img.jpg" // The path to your image file, relative to the public directory
                      alt="Project Image" // Alternative text for the image
                      layout="fill"
                      objectFit="cover"
                  />   
                </div>
                <div className="col text-block">
                  <h5 className="text-left text-color-default">
                    travelpass
                  </h5>
                  <h3 className="text-left text-color-secondary">
                    providing the explorer at heart unforgettable adventures.              
                  </h3>
                  <div className="align-left">
                    <MyLink className="my-link" href="/proj3">case study </MyLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
