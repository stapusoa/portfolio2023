// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from next/image


export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href="/">
            <Image
                src="/logo-green.svg" // Assuming logo-green.svg is in the public/ directory
                alt="ST"
                width={150} // Define the size of the logo
                height={50}
                style={{ paddingBottom: '0' }}
                />          
            </Link>
        </div>
        <div className="navbar-right">
          <Link href="/">work
            
          </Link>
          <Link href="/about">about
          </Link>
          <Link href="/resume">resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
