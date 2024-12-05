import Link from "next/link";

function AboutUsTextBox() {
  return (
    <div className="about__text-box">
      <h3 className="heading-3">Crafted to Perfection, Inspired by Passion</h3>
      <h2 className="heading-2">Exquisite Creations from Culinary Virtuosos</h2>
      <ul className="paragraph-list u-margin-bottom-lg">
        <li>
          At Belle Étoile, each dish is a harmonious blend of innovation and
          tradition, designed to captivate your senses. Using the finest,
          locally-sourced ingredients, we transform every plate into an edible
          work of art.
        </li>
        <li>
          Our world-class chefs, masters of their craft, bring years of
          expertise and boundless creativity to your table. Their dedication to
          excellence ensures every bite is a celebration of flavor and finesse.
        </li>
      </ul>
      <Link href="#" className="btn">
        Book your meal
      </Link>
    </div>
  );
}

export default AboutUsTextBox;
