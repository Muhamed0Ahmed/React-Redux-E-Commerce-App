import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Users from "../../Data/Users";

import {
  authFaild,
  authSuccess,
} from "../../store/AuthSlice/AuthAction";

import "./LogIn.scss";

export default function LogIn() {
  const isLogIn = useSelector((state) => state.auth.isLogIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [textError, setTextError] = useState("");

  const handleSuccess = (admin) => {
    dispatch(
      authSuccess({
        id: admin.id,
        username: admin.username,
        email: admin.email,
        password: admin.password,
        terms: admin.terms,
      })
    );
    console.log("success");
    localStorage.setItem("name", admin.username);
    localStorage.setItem("id", admin.id);
    localStorage.setItem("email", admin.email);

    setTextError("")
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const handelFaild = () => {
    dispatch(authFaild("user name or password not correct"));
    setTextError("user name or password not correct")
    localStorage.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userJson = {
      email: user.trim(),
      password: pwd
    }
    const admin = await fetch("http://localhost:8000/api/users/login", {
      method:"POST",
      body:JSON.stringify(userJson),
      headers:{
        "content-type":"application/json"
      }
    }).then(res => res.json()).then(data => data).catch(err => console.log(err));

    admin.message === "Login Successful" ? handleSuccess(admin) : handelFaild();
    localStorage.setItem("name", admin.name);
    localStorage.setItem("id", admin.id);
    localStorage.setItem("email", userJson.email);
    localStorage.setItem("cart",JSON.stringify())
    console.log(admin.name)
  };


  return (
    <div className="login-container">
      <h1>Amazona</h1>
      {!isLogIn ? (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={e => setUser(e.target.value)}
            value={user}
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPwd(e.target.value)}
            value={pwd}
          />
          <p className="text-error">{textError}</p>
          <button onClick={handleSubmit}>Sign In</button>
          <p>if you are not have account <a href="/register">Sign Up</a></p>
        </form>
      ) : (
        <div className="content-Login">
          <p> You Are Login</p>
          <button >  log in by another userName</button>
        </div>
      )}
    </div>
  );
}
