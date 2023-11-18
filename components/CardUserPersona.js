import React from 'react';
import styled from 'styled-components';
import { Heading3, Subtitle1 } from './typography'; // Import your typography styles
import '../styles/globals.css';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const PersonaInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  z-index: 1;
  transition: opacity 0.3s ease;
`;

const PersonaImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: opacity 0.3s ease;
`;

const PersonaDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none; /* Initially hidden */
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  background-color: #ECECEF;

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    background-color: #F8F7FA;
    /* Show detailed info and hide initial info on hover */
    ${PersonaInfo}, ${PersonaImage} {
      display: none;
    }
    ${PersonaDetails} {
      display: block;
    }
  }
`;

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
  return (
    <CardWrapper>
      <PersonaImage src={persona.image} alt={`${persona.name}`} />
      <PersonaInfo>
        <PersonaName>{persona.name}</PersonaName>
        <PersonaJob>{persona.job}</PersonaJob>
      </PersonaInfo>
      <PersonaDetails>
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

