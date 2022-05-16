import { useState } from "react";
import SCarousel from "./style";
import imgdata1 from "../../pictures/products/prod1.webp";
import imgdata2 from "../../pictures/products/prod2.webp";
import imgdata3 from "../../pictures/products/prod3.webp";
import imgdata4 from "../../pictures/products/prod4.webp";
import imgdata5 from "../../pictures/products/prod5.webp";
import imgdata6 from "../../pictures/products/prod6.webp";
import imgdata7 from "../../pictures/products/prod7.webp";

export default function Carousel() {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState(0);

  const CarouselData = [
    { img: imgdata1 },
    { img: imgdata2 },
    { img: imgdata3 },
    { img: imgdata4 },
    { img: imgdata5 },
    { img: imgdata6 },
    { img: imgdata7 },
  ];

  const prevSlide = () => {
    if (position === 0) return;
    setPosition(position - 1);
  };
  const nextSlide = () => {
    if (position + 4 >= CarouselData.length) return;
    setPosition(position + 1);
  };

  return (
    <SCarousel>
      <div className="carouselContainer">
        <button type="button" onClick={prevSlide}>
          &lsaquo;
        </button>
        {CarouselData.filter(
          (toto, img) => img >= position && img < position + 4
          // eslint-disable-next-line no-unused-vars
        ).map((img) => {
          return <img key={images} src={images} alt="carousel" />;
        })}
        <button type="button" onClick={nextSlide}>
          &rsaquo;
        </button>
      </div>
    </SCarousel>
  );
}
