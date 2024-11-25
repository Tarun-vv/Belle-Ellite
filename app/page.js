import Image from "next/image";
import hero from "@/public/hero/hero-image.jpeg";
import Link from "next/link";
import Hero from "./_components/hero/Hero";
import AboutUs from "./_components/about-us/AboutUs";
import Meals from "./_components/meals/Meals";

function page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Meals />
    </>
  );
}

export default page;
