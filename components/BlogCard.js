import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 300px; // Adjust the size as needed
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px; // Adjust the height as needed
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05); // Zoom effect on hover
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    background: rgba(0, 0, 0, 0.5); // Black gradient overlay
    opacity: 1;
  }
`;

const CardButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  display: none;
  ${CardOverlay}:hover & {
    display: block;
  }
`;

const CardTitle = styled.h3`
  text-align: center;
  color: #333;
  margin-top: 10px; // Space between the card and the title
`;

const BlogCard = ({ image, title, onButtonClick }) => (
  <div>
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <CardOverlay>
        <CardButton onClick={onButtonClick}>Read More</CardButton>
      </CardOverlay>
    </CardWrapper>
    <CardTitle>{title}</CardTitle>
  </div>
);

export default BlogCard;
