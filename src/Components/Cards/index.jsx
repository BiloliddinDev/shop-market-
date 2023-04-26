import { Button, Card } from "antd";
import { useContext } from "react";
import { TemaContext } from "../../Contexts";
import classNames from "classnames";
const { Meta } = Card;

const Cards = ({ img, title, des, click }) => {
  const { mode } = useContext(TemaContext);
  return (
    <Card
      className={classNames({ "bg-slate-500": mode })}
      hoverable
      style={{
        width: 400,
        height: 520,
        display: "grid",
        placeItems: "center",
        padding: "15px",
      }}
      cover={
        <img
          style={{ width: "100%", height: 350, display: "inline" }}
          alt="example"
          src={img}
        />
      }
    >
      <Meta title={title} description={des} />
      <Button
        style={{ border: "none", outline: "none" }}
        className="mt-3 bg-slate-700 text-cyan-50"
        block
        onClick={click}
      >
        More
      </Button>
    </Card>
  );
};
export default Cards;
