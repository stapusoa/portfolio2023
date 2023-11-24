import React from 'react';
import styled from 'styled-components';

const UserFlowWrapper = styled.div`
  margin: 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: block;
  width: 70vw; /* Full viewport width */
  max-width: 100%; /* Ensure it doesn't exceed the parent's width */
  
`;

const ScrollableContainer = styled.div`
  overflow-x: auto; // Enable horizontal scrolling for this container
  width: 100%; // Take full width of the parent
`;

const Table = styled.div`
  display: table-row-group;
`;

const TableRow = styled.div`
  display: flex; // Change to flex to lay out children horizontally
  padding: 0;
  margin: 0;
  align-items: flex-start; // Optional, to align items vertically within the row
  gap: 2rem;
`;

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
  padding: 0;
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
  margin: 0;
`;

const BoldLabel = styled(TableCell)`
  font-family: 'Gilroy', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #616972;
  color: white;
  text-align: center;
  border-radius: 8px;
  margin: 0;
`;

const ListItem = styled.li`
  font-family: 'Gilroy', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #616972;
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0 0 0 12px;
  // Add any additional styles you need
`;


const UserFlow = ({ user, columns }) => (
    <UserFlowWrapper>
        <ScrollableContainer>
            <Table>
                <TableRow>
                {columns.map((column, index) => (
                    <TableColumn key={index}>
                    <TableHeader>{column.header}</TableHeader>
                    {column.labels.map((label, labelIndex) => (
                        <BoldLabel key={labelIndex}>{label}</BoldLabel>
                    ))}
                    <StyledList>
                        {column.bulletPoints.map((item, idx) => (
                        <ListItem key={idx}>{item}</ListItem>
                        ))}
                    </StyledList>
                    </TableColumn>
                ))}
                </TableRow>
            </Table>
        </ScrollableContainer>
    </UserFlowWrapper>
  );
  
  
  

  export default UserFlow;
