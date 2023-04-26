import { useEffect, useState, useContext } from "react";
import { ProductContext, TemaContext } from "../../Contexts";
import { useParams, useNavigate } from "react-router-dom";
import { instance } from "../../Utils/axios";
import Cards from "../../Components/Cards";
import Loauder from "../../Components/Loauder";
import classNames from "classnames";

const Categ = () => {
  const { product } = useContext(ProductContext);
  const { mode } = useContext(TemaContext);
  const [data, setData] = useState([]);
  const [loauder, setLoauder] = useState(0);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/products/category/${id}`).then((res) => {
      setData(res.data);
      setLoauder(res.status);
    });
  }, [id]);

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
            {id}
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

export default Categ;
