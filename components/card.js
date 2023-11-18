import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: white;
  padding: 16px;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  height: 28vh;
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

const CardHeader = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: #999BA6;
`;

const CardTitle = styled.h6`
  font-family: 'Gilroy', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
  color: #3D405B;
`;

const CardDescription = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: #616972;
`;

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
