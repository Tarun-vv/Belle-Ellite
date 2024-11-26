import TestimonialText from "./TestimonialText";

import Image from "next/image";
import user1 from "@/public/testimonials/user-1.jpg";
import user2 from "@/public/testimonials/user-2.jpg";
import user3 from "@/public/testimonials/user-3.jpg";
import user4 from "@/public/testimonials/user-4.jpg";
import user5 from "@/public/testimonials/user-5.jpg";
import user6 from "@/public/testimonials/user-6.jpg";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    id: 1,
    imgUrl: user1,
    userName: "Jacob",
    userHeading: "Absolutely Exceptional!",
    userText:
      "The ambiance at Belle Étoile was stunning, and the food was beyond compare. Truly a gem of a restaurant!",
  },
  {
    id: 2,
    imgUrl: user2,
    userName: "Sarah",
    userHeading: "Culinary Perfection!",
    userText:
      "Each dish was a masterpiece, bursting with flavor and elegance. I can’t wait to come back.",
  },
  {
    id: 3,
    userName: "Mike",
    imgUrl: user3,
    userHeading: "Impeccable Service!",
    userText:
      "The staff was so warm and attentive, making every moment feel special. Hospitality at its finest!",
  },
  {
    id: 4,
    imgUrl: user4,
    userName: "James",
    userHeading: "Flawless Presentation!",
    userText:
      "Every corner of the restaurant exuded sophistication, from the décor to the plating. A visual delight!",
  },
  {
    id: 5,
    imgUrl: user5,
    userName: "Ahmed",
    userHeading: "A Gourmet Paradise!",
    userText:
      "The meals were extraordinary, with a perfect balance of tradition and creativity. Highly recommend!",
  },
  {
    id: 6,
    imgUrl: user6,
    userName: "Emily",
    userHeading: "Memorable and Magical!",
    userText:
      "Belle Étoile truly lives up to its name. The entire experience felt luxurious and thoughtfully crafted.",
  },
];

function Testimonial() {
  return (
    <section className="section-testimonials">
      <div className="container">
        <TestimonialText />
      </div>

      <div className="container">
        <div className="testimonial grid grid--3--cols gap-sm">
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              testimonialData={testimonial}
              key={testimonial.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
