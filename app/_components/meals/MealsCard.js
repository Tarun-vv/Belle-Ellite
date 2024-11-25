import Image from "next/image";
import meal1 from "@/public/meals/meals-image-1.jpeg";

function MealsCard() {
  return (
    <div className="grid grid--3--cols gap-sm">
      <div className="meals__card">
        <div className="meals__card-img-box ">
          <Image
            src={meal1}
            className="meals__card-img"
            placeholder="blur"
            quality={90}
            alt="meal"
          />
          <div className="meals__card-text-box">
            <h3 className="heading-3">Truffle Risotto</h3>
            <ul className="paragraph-list">
              <li>🥗 340 calories per serving</li>
              <li>🍄 Infused with black truffle</li>
              <li>🧀 Topped with aged Parmesan</li>
              <li>🌿 Made with organic ingredients</li>
              {/* <li>🧂 Low sodium and gluten-free</li> */}
            </ul>
          </div>
        </div>
      </div>
      <h1>Card 1</h1>
      <h1>Card 1</h1>
    </div>
  );
}

export default MealsCard;
