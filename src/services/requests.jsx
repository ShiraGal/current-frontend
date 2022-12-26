import axios from "axios";
// const serverUrl = "http://localhost:3800/api";
const serverUrl = "https://pluss30-api.onrender.com/api";
// 

const postNewUser = (newUser) => {
  axios.post(`${serverUrl}/users/register`, newUser);
};

const getUserData = (user) => {
  console.log("getUserData  " + user.email);
  return axios.post(
    `${serverUrl}/users/login`,
    {
      user,
    },
    {
      headers: {
        authorization: "Bearer " + localStorage.token,
      },
    }
  );
};

const getUserGigs = () => {
  return axios.get(`${serverUrl}/gigs`, {
    headers: {
      authorization: "Bearer " + localStorage.token,
    },
  });
};

const postNewGig = (userId, gigData) => {
  return axios.post(`${serverUrl}/gigs/user/${userId}`, gigData);
};
const updateGig = (gigId, update) => {
  return axios.put(`${serverUrl}/gigs/${gigId}`, update);
};

const removeTokenFromStorage = () =>
  window.localStorage.removeItem("token") || "";

export {
  postNewUser,
  getUserData,
  getUserGigs,
  postNewGig,
  updateGig,
  removeTokenFromStorage,
};
