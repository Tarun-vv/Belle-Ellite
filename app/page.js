import Image from "next/image";
import hero from "@/public/hero/hero-image.jpeg";
import Link from "next/link";
import Hero from "./_components/hero/Hero";
import AboutUs from "./_components/about-us/AboutUs";
import Meals from "./_components/meals/Meals";
import Ethos from "./_components/ethos/Ethos";
import Testimonial from "./_components/testimonials/Testimonial";
import Form from "./_components/form/Form";
import Footer from "./_components/footer/Footer";
import Login from "./_components/Login";
import SignOut from "./_components/Navigation/SignOut";
import FAQS from "./_components/FAQS";

function page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Meals />
      <Ethos />
      <Testimonial />
      <Form />
      <FAQS />
      <Footer />
      <SignOut />
    </>
  );
}

export default page;
