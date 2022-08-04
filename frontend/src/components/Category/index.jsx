import { useContext, useState } from "react";
import stateContext from "@services/Contexts/context";
import Cards from "./Cards";
import SCategory from "./style";

export default function Category() {
  const { dataArticles } = useContext(stateContext);
  const [choicePrice, setChoicePrice] = useState();
  return (
    <SCategory>
      <section className="filtre">
        <div className="cor">
          Filtrer par:
          <div className="option">
            Prix:
            <button
              type="button"
              className="cub"
              value={29}
              onClick={(e) => setChoicePrice(e.target.value)}
            >
              0 à 29 €
            </button>
            <button
              type="button"
              className="cub"
              value={49}
              onClick={(e) => setChoicePrice(e.target.value)}
            >
              30 à 49 €
            </button>
            <button
              type="button"
              className="cub"
              value={75}
              onClick={(e) => setChoicePrice(e.target.value)}
            >
              50 à 75 €
            </button>
            <button
              type="button"
              className="cub"
              value={200}
              onClick={(e) => setChoicePrice(e.target.value)}
            >
              75 à ~ €
            </button>
          </div>
          <div className="option"> Couleurs:</div>
        </div>
      </section>
      <ul className="main">
        {dataArticles
          .filter((card) => card.price < choicePrice)
          .map((card) => (
            <li>
              <Cards
                key={card.id}
                name={card.name}
                price={card.price}
                exclu={card.exclu}
                stock={card.stock}
                size={card.size}
                img={card.img}
                color={card.color}
              />
            </li>
          ))}
      </ul>
    </SCategory>
  );
}
