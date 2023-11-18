import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Import the Image component from next/image
import '../styles/components.css';


const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;


const CopyRightText = styled.span`
  margin-left: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: black;
  padding-top: 8px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.div`
font-family: 'Gilroy', sans-serif;
font-size: 1.25rem;
font-weight: 500;
text-decoration: none;
vertical-align: middle;
color: #353535;
padding: 0 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinksContainer>
        <Link href="/">
            <Image
                src="/logo-green.svg" // Assuming logo-green.svg is in the public/ directory
                alt="ST"
                width={120} // Define the size of the logo
                height={24}
                style={{ paddingTop: '16px' }}
                />          
        </Link>
        <CopyRightText>© 2023 Sara Tapusoa. All rights reserved.</CopyRightText>
      </LinksContainer>
      <LinksContainer>
        <Link href="/about">about</Link>
        <Link href="/resume">resume</Link>
        <Link href="/resume">linkedin</Link>
      </LinksContainer>
    </FooterWrapper>
  );
};

export default Footer;
