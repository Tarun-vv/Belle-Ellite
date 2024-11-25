import Link from "next/link";

import Image from "next/image";
import meal1 from "@/public/meals/meals-image-1.jpeg";

function CardItem() {
  return (
    <div className="card">
      <div className="card--front">
        <div className="card__img-box">
          <Image src={meal1} alt="meal image" className="card__img" />
        </div>
        <div className="card__text-box">
          <h3 className="heading-3">Truffle Risotto</h3>
          <ul className="paragraph-list">
            <li>🥗 340 calories per serving</li>
            <li>🍄 Infused with black truffle</li>
            <li>🧀 Topped with aged Parmesan</li>
            <li>🌿 Made with organic ingredients</li>
          </ul>
        </div>
      </div>
      <div className="card--back">
        <div className="card--back-text">
          <h3 className="heading-3">Order now</h3>
          <p className="text-md">Only</p>
          <p className="text-lg u-margin-bottom-md">$35</p>
          <Link className="btn" href="#">
            Order now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
