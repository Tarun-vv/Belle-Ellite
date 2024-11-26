import AboutUsImgBox from "./AboutUsImgBox";
import AboutUsTextBox from "./AboutUsTextBox";

function AboutUs() {
  return (
    <section className="section-about">
      <div className="about container grid grid--2--cols gap-sm">
        <AboutUsTextBox />
        <AboutUsImgBox />
      </div>
    </section>
  );
}

export default AboutUs;
