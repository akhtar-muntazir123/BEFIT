import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  display: flex;
  flex-direction:column;
  gap: 15px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};

`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const WeeklyStatsCard = ({data}) => {
  // const data={
  //     totalCaloriesBurnt:13500,
  //     totalWorkouts:6,
  //     avgCaloriesBurntPerWorkout:2250,
  //     totalWeeksCaloriesBurnt:{
  //       weeks:["17th","18th","19th","20th"],
  //       caloriesBurned:[10500,0,0,0]
  //     },
  //   }

  return (
    <Card>
      <Title>Weekly Calories burned</Title>

      {/* {data?.totalWeeksCaloriesBurnt && ( */}
      {/* <BarChart
          xAxis={[
            { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
          ]}
          series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
          height={300}
        />
     */}
      {data?.totalWeeksCaloriesBurnt && (
        <BarChart
          series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
          height={300}
          xAxis={[
            { data: data?.totalWeeksCaloriesBurnt?.weeks, scaleType: "band" },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}

      {/* )} */}
    </Card>
  );
};

export default WeeklyStatsCard;
