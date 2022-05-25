import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import SCategory from "./style";

export default function Category() {
  const [dataProducts, setDataProducts] = useState([]);

  // api call data => sql 1//
  useEffect(() => {
    axios.get("http://localhost:5050/MainProductsMen").then(({ data }) => {
      setDataProducts(data);
    });
  }, []);

  return (
    <SCategory>
      <div>Coucou</div>
      <ul className="main">
        {dataProducts.map((card) => (
          <li>
            <Cards
              key={card.id}
              Name={card.Name}
              Price={card.Price}
              img1={card.img1}
              img2={card.img2}
              img3={card.img3}
              img4={card.img4}
              color1={card.color1}
              color2={card.color2}
              color3={card.color3}
              color4={card.color4}
              maincolor1={card.maincolor1}
              maincolor2={card.maincolor2}
              maincolor3={card.maincolor3}
              maincolor4={card.maincolor4}
            />
          </li>
        ))}
      </ul>
    </SCategory>
  );
}
