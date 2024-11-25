import meal1 from "@/public/meals/meals-image-1.jpeg";
import meal2 from "@/public/meals/meals-image-2.jpeg";
import meal3 from "@/public/meals/meals-image-3.jpg";
import CardItem from "./CardItem";

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
        item: "🧂 Low sodium, zinc and gluten-free",
      },
    ],
    mealCost: 40,
  },
  {
    id: 3,
    mealUrl: meal3,
    mealName: "Beef Wellington",
    mealList: [
      {
        id: 1,
        item: "🌱 No artificial additives",
      },
      {
        id: 2,
        item: "🍯 Less than 10g sugar",
      },
      {
        id: 3,
        item: "🥩 Prime beef and mushroom filling",
      },
      {
        id: 4,
        item: "🍽️ Classic recipe, expertly crafted",
      },
    ],
    mealCost: 37,
  },
];

function MealsCard() {
  return (
    <div className="grid grid--3--cols gap-sm">
      {mealData.map((meal) => (
        <CardItem meal={meal} key={meal.id} />
      ))}
    </div>
  );
}

export default MealsCard;
