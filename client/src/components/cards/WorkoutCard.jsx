import React from "react";
import styled from "styled-components";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import TimelapseRoundedIcon from "@mui/icons-material/TimelapseRounded";

const Card = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  @media (max-width: 600) {
    padding: 12px 14px;
  }
`;
const Category = styled.div`
  font-weight: 500;
  padding: 4px 10px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.shadow};
  border-radius: 8px;
  width: fit-content;
`;

const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Flex = styled.div`
  display: flex;
  gap: 16px;
`;
const Details = styled.div`
font-size:15px;
color:${({theme})=>theme.text_primary};
display:flex;
align-items:center;
gap:6px;`;
const Sets = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
`;
const WorkoutCard = ({workout}) => {
  return (
    <Card>
      <Category>#{workout?.category}</Category>
      <Name>{workout?.name}</Name>
      <Sets>Count {workout?.sets} x {workout?.reps}</Sets>
      <Flex>
        <Details>
          <FitnessCenterRoundedIcon
            sx={{ fontSize: "20px", color: "inherit" }}
          ></FitnessCenterRoundedIcon>
         {workout?.weight}kg
        </Details>
       
        <Details>
        <TimelapseRoundedIcon
          sx={{ fontSize: "20px", color: "inherit" }}
        ></TimelapseRoundedIcon>
        {workout?.duration} min
        </Details>
      </Flex>
    </Card>
  );
};

export default WorkoutCard;
