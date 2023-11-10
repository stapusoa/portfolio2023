// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import MyLink from '../components/MyLink'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import the icon

export default function Proj1() {
  return (
    <div>

      <main className="min-h-screen">
        <div className="hero-section">
          <div className="hero-container">
            <div className="hero-header">
              <h4 className="text-left">
                fishbowl go
              </h4>
              <h1 className="text-left">
              simplifying inventory management in the warehouse and in the office.
              </h1>
              <div className="button-double-container">
                <button className="button-primary">
                  website
                </button>
                <button className="button-secondary">
                  prototype
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="section-txt-col">
            <div className="col-text-container">
              <h2 className="text-left">
                overview
              </h2>
              <h4 className="text-left">
              Lorem ipsum dolor sit amet consectetur. Habitasse ullamcorper gravida enim erat. Pharetra hac elit urna malesuada quisque sit non luctus sit. Fermentum felis eget euismod sed est leo. Venenatis egestas aliquam amet proin habitasse nunc.                
              </h4>
            </div>

            
            <div className="col-list-container">
                <h6 className="text-left">
                role
                </h6>
                <h6 className="subtitle1 text-left">
                Lorem ipsum dolor sit amet consectetur.                 
                </h6> 
                <h6 className="text-left">
                role
                </h6>
                <h6 className="subtitle1 text-left">
                Lorem ipsum dolor sit amet consectetur.                 
                </h6> 
                <h6 className="text-left">
                role
                </h6>
                <h6 className="subtitle1 text-left">
                Lorem ipsum dolor sit amet consectetur.                 
                </h6> 
            </div>
            </div>

            <div className="section-txt-img-center">
            <h5 className="text-center">
                fishbowl go
            </h5>
            <h3 className="text-center">
              simplifying inventory management in the warehouse and in the office.
            </h3>
            <div className="link-container">
              <MyLink className="my-link" href="/about">case study </MyLink>
            </div>
            


            
          </div>
          <div className="section-txt-img-right">
            
            
            <div className="proj3-img-container">
              <Image
                  src="/tp-project-img.jpg" // The path to your image file, relative to the public directory
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
                providing the explorer at heart unforgettable adventures.              
                </h3>
                <div className="link-right-container">
              <MyLink className="my-link" href="/about">case study </MyLink>
            </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
