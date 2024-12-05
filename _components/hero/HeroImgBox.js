import Image from "next/image";
import hero from "@/public/hero/hero-image.jpeg";

function HeroImgBox() {
  return (
    <div className="hero__img-box">
      <Image
        src={hero}
        alt="hero"
        placeholder="blur"
        quality={100}
        className="hero__img"
      />
    </div>
  );
}

export default HeroImgBox;
