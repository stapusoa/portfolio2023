import styled from 'styled-components';
import { Heading6, Body1 } from './typography'; // Import your typography styles
import '../styles/globals.css';

const CardWrapper = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  padding-top: 40px; /* Extra padding to accommodate the circle */
  margin: 0;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  position: absolute;
  top: -20px; /* Half of the circle's height to make it overlap */
  left: 50%;
  transform: translateX(-50%);
  width: 40px; /* Circle size */
  height: 40px;
  background-color: #81B29A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Gilroy', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
`;

const CardTitle = Heading6;
const CardDescription = Body1;


const CardNumbered = ({ number, title, description }) => (
  <CardWrapper>
    <Circle>{number}</Circle>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardWrapper>
);

export default CardNumbered;
