import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
  min-width: 350px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CategoryChart = ({data}) => {
  if (data)
  {
    console.log("pie chart data",data?.pieChartData)
  }
  // const data={pieChartData:[
  //   {
  //     id:0,
  //     value:3421,
  //     label:"back"
  //   },
  //   {
  //     id:1,
  //     value:3421,
  //     label:"shoulder"
  //   },
  //   {
  //     id:2,
  //     value:3421,
  //     label:"arms"
  //   },
  //   {
  //     id:3,
  //     value:3421,
  //     label:"legs"
  //   },

  // ]}
  
  
    

  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData && (
        <PieChart
          series={[
            {
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={300}
        />
      )}
    </Card>
  );
};

export default CategoryChart;