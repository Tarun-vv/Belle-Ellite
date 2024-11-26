import { HiMiniSparkles } from "react-icons/hi2";
import { HiHeart } from "react-icons/hi2";
import { HiMiniStar } from "react-icons/hi2";
import { HiGlobeAmericas } from "react-icons/hi2";
import EthoItem from "./EthoItem";

const ethoData = [
  {
    id: 1,
    svg: <HiMiniSparkles className="etho__icon u-margin-bottom-lg" />,
    heading: "Every Ingredient, Every Detail",
    content:
      "At Belle Étoile, we source only the finest, freshest ingredients and apply meticulous preparation methods. Every dish tells a story of passion and excellence, delivering a dining experience that lingers in your memory.",
  },
  {
    id: 2,
    svg: <HiHeart className="etho__icon u-margin-bottom-lg" />,
    heading: "Exceptional Hospitality",
    content:
      "Our dedicated team goes above and beyond to ensure your comfort and delight. From the moment you step in, we strive to create an atmosphere of genuine care and unmatched service.",
  },
  {
    id: 3,
    svg: <HiMiniStar className="etho__icon u-margin-bottom-lg" />,
    heading: "Unmatched Dining Experience",
    content:
      "Every aspect of Belle Étoile, from its luxurious ambiance to the artistry of its dishes, exudes sophistication. We aim to provide a setting where every moment feels truly special. Let me know if this captures the tone you're looking for!",
  },
  {
    id: 4,
    svg: <HiGlobeAmericas className="etho__icon u-margin-bottom-lg" />,
    heading: "Respect for Nature, Every Step",
    content:
      "At Belle Étoile, we are committed to environmentally conscious practices. From sourcing ingredients responsibly to reducing waste, we strive to protect our planet while delivering exceptional dining experiences.",
  },
];

function Ethos() {
  return (
    <section className="section-ethos ">
      <div className="container u-margin-bottom-md">
        <h3 className="heading-3">Our Ethos</h3>
      </div>

      <div className="container grid grid--2--cols gap-sm">
        {ethoData.map((etho) => (
          <EthoItem etho={etho} key={etho.id} />
        ))}
      </div>
    </section>
  );
}

export default Ethos;
