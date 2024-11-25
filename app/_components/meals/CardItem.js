import Link from "next/link";
import Image from "next/image";

function CardItem({ meal }) {
  const { mealUrl, mealName, mealList, mealCost } = meal;
  return (
    <div className="card">
      <div className="card--front">
        <div className="card__img-box">
          <Image
            src={mealUrl}
            alt="meal image"
            className="card__img"
            placeholder="blur"
            quality={90}
          />
        </div>
        <div className="card__text-box">
          <h3 className="heading-3">{mealName}</h3>
          <ul className="paragraph-list">
            {mealList.map((item) => (
              <li key={item.id}>{item.item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card--back">
        <div className="card--back-text">
          <h3 className="heading-3">Order now</h3>
          <p className="text-md">Only</p>
          <p className="text-lg u-margin-bottom-md">${mealCost}</p>
          <Link className="btn" href="#">
            Order now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
