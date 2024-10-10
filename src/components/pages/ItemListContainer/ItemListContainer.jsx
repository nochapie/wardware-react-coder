import { Card } from "../../common/card/Card";
import "./itemListContainer.css";

export const ItemListContainer = ({ title }) => {
  return (
    <>
      <div className="Itemcontainer">
        <h1>{title}</h1>
      </div>
    </>
  );
};
