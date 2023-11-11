import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading3, Subtitle1 } from './typography'; // Import your typography styles
import '../styles/globals.css';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const PainContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Gilroy', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #DE5B3E;
`;

const GoalContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Gilroy', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #81B29A;
`;

const Icon = styled.span`
  margin-right: 8px; // Adjust spacing as needed
  display: flex;
  align-items: center;
`;


const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  background-color: ${props => props.showDetails ? '#F8F7FA' : '#ECECEF'};

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

const PersonaImage = styled.img`
  width: 200px; /* Smaller size for the bottom right corner */
  height: 200px;
  object-fit: cover;
  position: absolute;
  bottom: 0; /* Position at the bottom right */
  right: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: ${props => props.showDetails ? 'scale(0)' : 'scale(1)'};
`;

const PersonaInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  z-index: 1;
  transition: opacity 0.3s ease;
  opacity: ${props => props.showDetails ? 0 : 1};
`;

const PersonaDetails = styled.p`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 2;
  text-align: left;
  display: ${props => props.showDetails ? 'block' : 'none'};
`;

const PersonaDemo = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #353535;
`;

const PersonaBio = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: #353535;
`;

const PersonaQuote = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: #353535;
`;

const PersonaPain = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: #353535;
`;

const PersonaGoal = styled.p`
    font-family: 'Gilroy', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: #353535;
`;

const PersonaName = Heading3;
const PersonaJob = Subtitle1;

const CardUserPersona = ({ persona }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <CardWrapper onClick={toggleDetails} onMouseEnter={toggleDetails} onMouseLeave={toggleDetails} showDetails={showDetails}>
      <PersonaImage src={persona.image} alt={`${persona.name}`} showDetails={showDetails} />
      <PersonaInfo showDetails={showDetails}>
        <PersonaName>{persona.name}</PersonaName>
        <PersonaJob>{persona.job}</PersonaJob>
      </PersonaInfo>
      <PersonaDetails showDetails={showDetails}>
        <PersonaDemo>{persona.demo}</PersonaDemo>
        <PersonaBio>{persona.bio}</PersonaBio>
        <PersonaQuote>{persona.quote}</PersonaQuote>
        <PainContainer>
          <Icon><SentimentVeryDissatisfiedIcon /></Icon>
          <PersonaPain>{persona.pain}</PersonaPain>
        </PainContainer>
        <GoalContainer>
          <Icon><SentimentSatisfiedAltIcon /></Icon>
          <PersonaGoal>{persona.goal}</PersonaGoal>
        </GoalContainer>
      </PersonaDetails>
    </CardWrapper>
  );
};

export default CardUserPersona;
