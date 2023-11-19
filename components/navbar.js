import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const toggleMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
  };

  const handleClickOutside = (event) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && !mobileMenu.contains(event.target) && !event.target.matches('.menu-icon, .menu-icon *')) {
      mobileMenu.classList.remove('active');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon /> 
        </div>
        <div className="navbar-right">
          <Link href="/">work</Link>
          <Link href="/about">about</Link>
          <Link href="/resume">resume</Link>
        </div>
        <div className="mobile-menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}






