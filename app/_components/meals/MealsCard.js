import Link from "next/link";

import Image from "next/image";
import meal1 from "@/public/meals/meals-image-1.jpeg";
import meal2 from "@/public/meals/meals-image-2.jpeg";

const mealData = [
  {
    id: 1,
    mealUrl: meal1,
    mealName: "Truffle Risotto",
    mealList: [
      {
        id: 1,
        item: "🥗 340 calories per serving",
      },
      {
        id: 2,
        item: "🍄 Infused with black truffle",
      },
      {
        id: 3,
        item: "🧀 Topped with aged Parmesan",
      },
      {
        id: 4,
        item: "🌿 Made with organic ingredients",
      },
    ],
    mealCost: 35,
  },
  {
    id: 2,
    mealUrl: meal2,
    mealName: "Kung Pao Chicken",
    mealList: [
      {
        id: 1,
        item: "🥡 Under 400 calories",
      },
      {
        id: 2,
        item: "❌ No added MSG",
      },
      {
        id: 3,
        item: "🥕 Stir-fried with fresh vegetables",
      },
      {
        id: 4,
        item: "🌶️ Balanced authentic spices",
      },
    ],
    mealCost: 40,
  },
];

function MealsCard() {
  return (
    <div className="grid grid--3--cols gap-sm">
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

      <h1>Card 1</h1>
    </div>
  );
}

export default MealsCard;
