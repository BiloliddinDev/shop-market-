import { Button } from "antd";
import classNames from "classnames";
import React, { useContext } from "react";
import { TemaContext } from "../../Contexts";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const { mode } = useContext(TemaContext);
  const nav = useNavigate();
  return (
    <div
      style={{ height: "82vh" }}
      className={classNames("flex flex-col justify-center gap-4 items-center", {
        "bg-slate-800 text-white": mode,
      })}
    >
      <h1 className="text-6xl mb-4">404 Error</h1>
      <p className="text-2xl mb-3">Page Not Found !</p>
      <Button
        onClick={() => nav(-1)}
        className={classNames({ "bg-white": mode })}
      >
        Back
      </Button>
    </div>
  );
};

export default Error;
