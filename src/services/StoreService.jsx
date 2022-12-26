import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  postNewUser,
  getUserData,
  getUserGigs,
  postNewGig,
  updateGig,
  removeTokenFromStorage,
} from "./requests";

export const StoreCtxt = createContext({});

const StoreServise = ({ children }) => {
  const [user, setUser] = useState({});
  const [gigs, setGigs] = useState([]);
  const navigate = useNavigate();

  const addNewUser = async (newUser) => {
    await postNewUser(newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const getMyGigs = async () => {
    await getUserGigs()
      .then((res) => {
        setGigs(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const loginUser = async (user) => {
    console.log("loginUser in stor= " + user.email);
    await getUserData(user)
      .then((res) => {
        setUser(res.data.msg);
        localStorage.token = res.data.token;
      })
      .then(() => getMyGigs())
      .then(() => navigate("/gigs"))
      .catch((err) => alert(err.response.data));
  };

  const addNewGig = async (userId, gigData) => {
    await postNewGig(userId, gigData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const passToPaidGigs = async (gigId) => {
    await updateGig(gigId, { paidup: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const removeFromGigs = async (gigId) => {
    await updateGig(gigId, { isActive: false })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const logoutUser = () => {
    setUser({});
    setGigs([]);
    removeTokenFromStorage();
    navigate("/");
  };

  const actions = {
    addNewUser,
    loginUser,
    getMyGigs,
    addNewGig,
    passToPaidGigs,
    removeFromGigs,
    logoutUser,
  };
  const states = {
    user,
    gigs,
  };

  return (
    <StoreCtxt.Provider value={{ actions, states }}>
      {/* {errPop ? <ErrAlert myErr={errPop} /> : null} */}
      {children}
    </StoreCtxt.Provider>
  );
};

export default StoreServise;
