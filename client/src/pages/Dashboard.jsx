import React, { useEffect, useState } from "react";
import CountCard from "../components/CountCard";
import styled from "styled-components";
// import {counts} from "../utils/data1"
import { counts } from "../utils/data";
import { BarChart } from "@mui/icons-material";
import WeeklyStatsCard from "../components/cards/WeeklyStatsCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import { Button } from "@mui/material";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const CardWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  const [data, setData] = useState();
  const [todaysWorkout, setTodaysWorkout] = useState([]);
  const [buttonLoading, setButtonloading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [workout, setWorkout] = useState(`#Legs
    -Back Squat
    -5 setsX15 reps
    -30 kg
    -10 min`);

    //below can be implementeddummy data
  // const data={
  //   totalCaloriesBurnt:13500,
  //   totalWorkouts:6,
  //   avgCaloriesBurntPerWorkout:2250,
  //   totalWeeksCaloriesBurnt:{
  //     weeks:["17th","18th","19th","20th"],
  //     caloriesBurned:[10500,0,0,0]
  //   },
  //   pieChartData:[
  //     {
  //       id:0,
  //       value:3421,
  //       label:"back"
  //     },
  //     {
  //       id:1,
  //       value:3421,
  //       label:"shoulder"
  //     },
  //     {
  //       id:2,
  //       value:3421,
  //       label:"arms"
  //     },
  //     {
  //       id:3,
  //       value:3421,
  //       label:"legs"
  //     },

  //   ]

  // }

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("befit-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };
  const getTodaysWorkout = async () => {
    setLoading(true);

    //solving this error
    const token = localStorage.getItem("befit-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkout(res?.data?.todaysWorkouts);
      console.log("today's workout",res.data?.
        todaysWorkouts);
      setLoading(false);
    });
  };
  const addNewWorkout = async () => {
    setButtonloading(true);
    const token = localStorage.getItem("befit-app-token");
    console.log("token", token);
    console.log("workout string", workout);

    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonloading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountCard item={item} data={data} />
          ))}
        </FlexWrap>
        <FlexWrap>
          <WeeklyStatsCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
   
        </FlexWrap>

        <Section>
          <Title>Today's workout</Title>
          <CardWrapper>
            {/* currently it is not showing anything because the workout array is empty */}
            {todaysWorkout &&
              todaysWorkout.map((workout) => <WorkoutCard workout={workout} />)}
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
