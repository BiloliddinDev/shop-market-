import { useState, useEffect } from "react";
import { instance } from "../../Utils/axios";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [link, setLink] = useState([]);

  useEffect(() => {
    instance.get("/products/categories").then((res) => {
      setLink(res.data);
    });
  }, []);
  return (
    <div className="py-5 bg-slate-500 flex justify-center gap-12">
      <NavLink className="text-cyan-50 text-base" to={"/"}>
        All Prodect
      </NavLink>
      {link?.map((e) => (
        <NavLink key={e} className="text-cyan-50 text-base" to={`categ/${e}`}>
          {e}
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
