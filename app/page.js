import Image from "next/image";
import hero from "@/public/hero/hero-image.jpeg";
import Link from "next/link";
import Hero from "./_components/hero/Hero";
import AboutUs from "./_components/about-us/AboutUs";
import Meals from "./_components/meals/Meals";
import Ethos from "./_components/ethos/Ethos";
import Testimonial from "./_components/testimonials/Testimonial";

function page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Meals />
      <Ethos />
      <Testimonial />
    </>
  );
}

export default page;
