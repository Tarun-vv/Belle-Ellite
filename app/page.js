import Image from "next/image";
import hero from "@/public/hero/hero-image.jpeg";
import Link from "next/link";
import Hero from "./_components/hero/Hero";
import AboutUs from "./_components/about-us/AboutUs";

function page() {
  return (
    <>
      <Hero />
      <AboutUs />
    </>
  );
}

export default page;
