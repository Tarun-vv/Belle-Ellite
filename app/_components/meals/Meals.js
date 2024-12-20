import MealsCard from "./MealsCard";
import MealsImgBox from "./MealsImgBox";
import MealsTextBox from "./MealsTextBox";

function Meals() {
  return (
    <section className="section-meals">
      <div className="container">
        <h3 className="heading-3">A Journey Through Global Flavors</h3>
        <h2 className="heading-2">Signature Dishes That Define Excellence</h2>
        <p className="paragraph">
          Experience a curated selection of culinary masterpieces from around
          the globe. Each dish is crafted with precision, using premium
          ingredients and innovative techniques to deliver flavors that leave a
          lasting impression.
        </p>
      </div>

      <div className="container ">
        <MealsCard />
      </div>

      <div className="container grid grid--2--cols gap-md u-margin-top-lg ">
        <MealsImgBox />
        <MealsTextBox />
      </div>
    </section>
  );
}

export default Meals;
