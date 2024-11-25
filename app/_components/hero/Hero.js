import HeroImgBox from "./HeroImgBox";
import HeroTextBox from "./HeroTextBox";

function Hero() {
  return (
    <header className="header">
      <div className="hero">
        <div className="container grid grid--2--cols gap-md">
          <HeroTextBox />
          <HeroImgBox />
        </div>
      </div>
    </header>
  );
}

export default Hero;
