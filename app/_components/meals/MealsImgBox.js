import mealChef from "@/public/meals/meals-image-4.webp";
import Image from "next/image";

function MealsImgBox() {
  return (
    <Image
      src={mealChef}
      placeholder="blur"
      quality={80}
      alt="meal of chef cooking"
      className="meals__cta-img"
    />
  );
}

export default MealsImgBox;
