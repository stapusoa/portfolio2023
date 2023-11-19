import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const toggleMenu = () => {
    const navbarRight = document.querySelector('.navbar-right');
    navbarRight.classList.toggle('active');
  };

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
