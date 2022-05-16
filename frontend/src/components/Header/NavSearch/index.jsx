import SHeader from "./style";
import imgloupe from "../../pictures/pictos/loupe.png";

// eslint-disable-next-line react/prop-types
function NavSearch({ openSearch }) {
  if (!openSearch) {
    return null;
  }

  return (
    <SHeader>
      <div className="loupe__menu">
        <div className="fullSearch">
          <input className="form__label" type="text" placeholder="Rechercher" />
        </div>
        <div className="loupe__category">
          <ul>
            <li>Voir tout</li>
            <li>Hommes</li>
            <li>femmes</li>
            <li>Enfants</li>
            <li>La Maison</li>
          </ul>
        </div>
        <div className="searchSuggestion">
          <ul>
            <li>Recherches populaires :</li>
            <li>
              <img src={imgloupe} alt="imgloupe" />
              Boutique Polo Bear
            </li>
            <li>
              <img src={imgloupe} alt="imgloupe" />
              Robes
            </li>
            <li>
              <img src={imgloupe} alt="imgloupe" />
              Vestes & Manteaux
            </li>
          </ul>
        </div>
      </div>
    </SHeader>
  );
}

export default NavSearch;
