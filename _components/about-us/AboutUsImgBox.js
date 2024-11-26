import Image from "next/image";
// import about1 from "@/public/about us/about-image-1_341x250.jpeg";
import about2 from "@/public/about us/about-image-2_341x341.jpeg";
import about4 from "@/public/about us/about-image-4.jpeg";
import about7 from "@/public/about us/about-image-7.jpeg";
import about8 from "@/public/about us/about-image-8.jpeg";

// image data
const imgData = [
  { about: about2 },
  { about: about4 },
  { about: about7 },
  { about: about8 },
];

function AboutUsImgBox() {
  return (
    <div className="about__img-box grid grid--2--cols gap-sm">
      {imgData.map((img) => (
        <div className="about__img-container" key={img.about}>
          <Image
            src={img.about}
            placeholder="blur"
            className="about__img"
            quality={80}
            alt={img.about}
          />
        </div>
      ))}
    </div>
  );
}

export default AboutUsImgBox;
