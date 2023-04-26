import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TemaContext } from "../../Contexts";
import { instance } from "../../Utils/axios";
import Loauder from "../../Components/Loauder";
import { Button, Rate } from "antd";
import classNames from "classnames";

const Detel = () => {
  const { mode } = useContext(TemaContext);
  const [data, setData] = useState({});
  const [loauding, setLauding] = useState(0);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => {
      setData(res.data);
      setLauding(res.status);
    });
  }, [id]);
  return (
    <>
      {loauding === 200 ? (
        <div
          style={{ height: "82vh" }}
          className={classNames(
            "flex items-center justify-center  gap-12 text-center",
            {
              "bg-slate-800 text-white": mode,
            }
          )}
        >
          <img width={300} src={data?.image} alt="" />
          <div className="flex flex-col items-center">
            <h2 className="text-3xl mb-3 mt-8">{data.title.slice(0, 40)}...</h2>
            <h3 className="text-2xl mb-4">{data.category}</h3>
            <p className="w-96 text-lg">{data.description.slice(0, 150)}...</p>
            <h1 className="text-3xl font-bold mt-3 font-serif">
              {data.price} $
            </h1>
            <div className="flex items-center gap-4 mt-10">
              <Rate allowHalf defaultValue={data.rating.rate} />
              <h1>{data.rating.count}</h1>
            </div>
            <Button
              className={classNames("mt-8", { "bg-white": mode })}
              onClick={() => nav(-1)}
            >
              Back
            </Button>
          </div>
        </div>
      ) : (
        <Loauder />
      )}
    </>
  );
};

export default Detel;
