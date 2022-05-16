import { useEffect, useState } from "react";
import axios from "axios";
import SProductsBio from "./Style";

export default function ProductsBio() {
  // eslint-disable-next-line no-unused-vars
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/produits").then(({ data }) => {
      const myProduct = data.filter((product) => {
        return product.color.includes();
      });
      setDataProducts(myProduct);
    });
  }, []);

  return (
    <SProductsBio>
      <div className="mainProducts">coucou</div>
    </SProductsBio>
  );
}
