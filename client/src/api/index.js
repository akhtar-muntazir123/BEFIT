import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get( "/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  

// export const addWorkout = async (token, data) =>{
// console.log("token and data",token,data)
//   await API.post(`/user/workout`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// }
export const addWorkout = async (token, data) =>{
console.log("token and data",token,data)
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => {
    console.log(response.data.message);
  })
  .catch((error) => {
    if (error.response && error.response.data.message) {
      alert("Duplicate workout please enter a workout with different data"); // Show the duplicate alert
    } else {
      alert("An error occurred. Please try again.");
    }
  });
}

  export default UserSignIn