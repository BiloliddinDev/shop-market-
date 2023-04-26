import { useEffect, useState, useContext } from "react";
import { ProductContext, TemaContext } from "../../Contexts";
import { instance } from "../../Utils/axios";
import Cards from "../../Components/Cards";
import Loauder from "../../Components/Loauder";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts";

const Home = () => {
  const { product } = useContext(ProductContext);
  const { mode } = useContext(TemaContext);
  const { token } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loauder, setLoauder] = useState(0);
  const nav = useNavigate();

  console.log(token, "bu user token");

  useEffect(() => {
    instance.get("/products").then((res) => {
      setData(res.data);
      setLoauder(res.status);
    });
  }, []);

  const filter = data?.filter((e) => {
    return product === "" ? e : e.title.toLocaleLowerCase().includes(product);
  });

  return (
    <>
      {loauder === 200 ? (
        <div
          className={classNames("pt-10 pb-10 flex flex-col items-center", {
            "bg-slate-800": mode,
          })}
        >
          <h1
            className={classNames("text-4xl mb-5 uppercase", {
              "text-cyan-50": mode,
            })}
          >
            All products
          </h1>
          <div className="grid grid-cols-3 gap-10 justify-center ">
            {filter?.map((element) => (
              <Cards
                key={element?.id}
                img={element?.image}
                title={element?.title.slice(0, 30)}
                des={element?.description.slice(0, 50)}
                click={() => nav(`/detel/${element.id}`)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loauder />
      )}
    </>
  );
};

export default Home;
