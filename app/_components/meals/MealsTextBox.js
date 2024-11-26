import Link from "next/link";

function MealsTextBox() {
  return (
    <div className="meals__text-box">
      <h2 className="heading-2">Crafted with Care, Served with Passion</h2>
      <ul className="paragraph-list u-margin-bottom-lg">
        <li>
          At Belle Étoile, our chefs are true artists, infusing passion and
          expertise into every creation. With years of mastery, they craft
          dishes that do more than satisfy—they inspire.
        </li>
        <li>
          Each plate reflects our unwavering commitment to quality. By blending
          tradition with innovation and using only the freshest ingredients, we
          deliver a dining experience like no other.
        </li>
        <li>
          Let us delight your senses and surpass your expectations. Book a table
          today or explore our exquisite menu!
        </li>
      </ul>

      <Link href="#" className="btn">
        Book your table
      </Link>
    </div>
  );
}

export default MealsTextBox;
