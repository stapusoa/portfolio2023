import styled from 'styled-components';
import { Heading6, Body1 } from './typography'; // Import your typography styles

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column; // Stack children vertically
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px; // Space between header and title
`;

const CardIconWrapper = styled.div`
  font-size: 48px;
  color: #81B29A;
`;

const CardHeader = Body1;
const CardTitle = Heading6;
const CardDescription = Body1;

const Card = ({ header, title, description, Icon }) => (
  <CardWrapper>
    <HeaderContainer>
      <CardHeader>{header}</CardHeader>
      {Icon && <CardIconWrapper><Icon /></CardIconWrapper>}
    </HeaderContainer>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardWrapper>
);

export default Card;
