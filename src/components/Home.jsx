import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { uid } = useParams();
  console.log('uid',uid)
  const navigate = useNavigate();
  const myUsers = useSelector((state) => state.auths);
  
  const loggedUser = myUsers?.auths?.find((user) => toString(user.uid) === toString(uid));
  useEffect(() => {
    if (loggedUser) {
      navigate(`/home/${loggedUser.uid}`);
    } else {
      navigate(`/`);
    }
  }, [loggedUser,uid,navigate]);
  console.log('authUser',loggedUser)
  return (
    <div>
      User:<br></br>
      <p>{loggedUser.email}</p>
      <br></br>
      <p>{loggedUser.password}</p>
    </div>
  );
};

export default Home;
