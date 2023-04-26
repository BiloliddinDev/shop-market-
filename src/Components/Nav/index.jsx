import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext, TemaContext, UserContext } from "../../Contexts";
import { Button, Input, Space } from "antd";
import { instance } from "../../Utils/axios";

const { Search } = Input;

const Nav = () => {
  // contex data
  const { user } = useContext(UserContext);
  const { mode, setMode } = useContext(TemaContext);
  const { product, setProducts } = useContext(ProductContext);
  // Roter hook
  const nav = useNavigate();

  const onSearch = (value) => {
    setProducts(value.toLocaleLowerCase());
  };

  return (
    <div className="flex items-center justify-between bg-gray-700 px-14 py-4">
      <Link to="/">
        <h2 className="text-2xl text-slate-100">Shop Merket</h2>
      </Link>
      <div>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            allowClear
            bordered={true}
          />
        </Space>
      </div>
      <div className="flex items-center gap-5 px-10">
        <div className="flex items-center gap-3 cursor-pointer">
          <h2 className="text-2xl text-white ">
            {user.name ? (
              <div className="flex gap-2">
                <i className="fa-solid fa-user text-2xl text-white"></i>
                <h2 style={{ textTransform: "capitalize" }}>{user.name}</h2>
              </div>
            ) : (
              <Button
                onClick={() => {
                  nav("/login");
                }}
                style={
                  mode
                    ? { backgroundColor: "white", color: "black" }
                    : { backgroundColor: "darkblue", color: "white" }
                }
              >
                Login
              </Button>
            )}
          </h2>
        </div>
        <div className="absolute right-12" onClick={() => setMode(!mode)}>
          {mode ? (
            <i className="fa-solid fa-moon text-2xl text-white cursor-pointer"></i>
          ) : (
            <i className="fa-solid fa-sun text-2xl text-white cursor-pointer"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

<span></span>;
