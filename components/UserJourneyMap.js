import React from 'react';
import styled from 'styled-components';

const JourneyMapWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: block;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

const UserName = styled.h6`
  font-family: 'Gilroy', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

const UserGoal = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: #616972;
  margin: 0;
  padding: 0;
`;

const Table = styled.div`
  display: table-row-group;
`;

const TableRow = styled.div`
  display: table-row;
  padding: 0 1rem;
  margin: 0 1rem;
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 10px;
  vertical-align: top;
  font-family: 'Gilroy', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #616972;
`;

const TableLabel = styled.div`
  display: table-cell;
  padding: 10px;
  border: none;
  vertical-align: middle;
  font-family: 'Gilroy', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`;

const TableHeader = styled(TableCell)`
  font-family: 'Gilroy', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #81B29A;
  color: white;
  text-align: center;
  border-radius: 8px;
  margin: 0 1rem;
`;

const UserJourneyMap = ({ user, journey }) => (
  <JourneyMapWrapper>
    <Header>
      <UserName>{user.name}</UserName>
      <UserGoal>{user.goal}</UserGoal>
    </Header>
    <Table>
      <TableRow>
        <TableLabel></TableLabel>
        <TableHeader>Discover tool</TableHeader>
        <TableLabel></TableLabel>
        <TableHeader>Create</TableHeader>
        <TableLabel></TableLabel>
        <TableHeader>Manage</TableHeader>
      </TableRow>
        <TableRow>
        <TableLabel>Task</TableLabel>
          {journey.map((step, index) => (
            <TableCell key={index}>{step.task}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableLabel>Feeling</TableLabel>
          {journey.map((step, index) => (
            <TableCell key={index}>{step.feeling}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableLabel>Improvement Opportunity</TableLabel>
          {journey.map((step, index) => (
            <TableCell key={index}>{step.opportunity}</TableCell>
          ))}
        </TableRow>
      </Table>
    </JourneyMapWrapper>
);

  export default UserJourneyMap;
