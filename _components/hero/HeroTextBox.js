import Link from "next/link";
import HeroTestimonial from "./HeroTestimonial";

function HeroTextBox() {
  return (
    <div>
      <div className="hero__text-box">
        <h1 className="heading-1">Belle Étoile</h1>
        <p className="hero__caption">A Symphony of Flavors</p>
        <p className="hero__text">
          Discover culinary artistry at its finest. At Belle Étoile, every dish
          is a masterpiece crafted with passion, blending timeless traditions
          with modern flair to create an unforgettable dining experience.
        </p>
        <Link href="#" className="btn u-margin-bottom-md">
          Start eating well
        </Link>
        <HeroTestimonial />
      </div>
    </div>
  );
}

export default HeroTextBox;
