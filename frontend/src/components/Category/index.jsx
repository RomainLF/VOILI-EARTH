import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import SCategory from "./style";

export default function Category() {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/produits").then(({ data }) => {
      setDataProducts(data);
    });
  }, []);

  return (
    <SCategory>
      <div>Coucou</div>
      <ul className="main">
        {dataProducts.map((card) => (
          <li>
            <Cards key={card.id} name={card.name} imgface={card.imgface} />
          </li>
        ))}
      </ul>
    </SCategory>
  );
}
