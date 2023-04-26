import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { instance } from "../../Utils/axios";
import c from "./stayle.module.scss";
import { TemaContext, UserContext } from "../../Contexts";
import { message } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { mode } = useContext(TemaContext);
  const { setUser, setToken, token } = useContext(UserContext);
  const [navName, setNavName] = useState("");
  const username = useRef("");
  const password = useRef("");
  const nav = useNavigate();

  const Delete = () => {
    setNavName(username.current.value);
    username: username.current.value = "";
    password: password.current.value = "";
  };

  console.log(navName);
  console.log(token, "token");

  const handleSub = (e) => {
    e.preventDefault();
    instance
      .post("auth/login", {
        username: username.current.value,
        password: password.current.value,
      })
      .then((res) => {
        toast.success("Siz royhatdan otingiz!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setUser((prev) => ({ ...prev, name: "mor_2314" }));
        setToken(res.data);
        nav("/");
      })
      .catch((res) => {
        toast.error("Siz xali royhatdan otamgasniz!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });

    Delete();
  };

  return (
    <div
      style={{ height: "82vh" }}
      className={classNames("flex flex-col items-center justify-center", {
        "bg-slate-800 text-white": mode,
      })}
    >
      <form onSubmit={handleSub} className={c.form}>
        <h1 className="text-3xl">Login </h1>
        <label>
          <span>Username</span>
          <input
            className={classNames(c.form__input, { "text-black": mode })}
            ref={username}
            type="text"
            placeholder="Username"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            ref={password}
            className={classNames(c.form__input, { "text-black": mode })}
            type="password"
            placeholder="Password"
          />
        </label>
        <button className={c.form__btn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
