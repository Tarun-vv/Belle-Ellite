import Image from "next/image";
import user1 from "@/public/testimonials/user-1.jpg";
import user2 from "@/public/testimonials/user-2.jpg";
import user3 from "@/public/testimonials/user-3.jpg";
import user4 from "@/public/testimonials/user-4.jpg";
import user5 from "@/public/testimonials/user-5.jpg";
import user6 from "@/public/testimonials/user-6.jpg";

const imgData = [
  { testimonial: user1 },
  { testimonial: user2 },
  { testimonial: user3 },
  { testimonial: user4 },
  { testimonial: user5 },
  { testimonial: user6 },
];

function HeroTestimonial() {
  return (
    <div className="hero__testimonial">
      <div className="hero__testimonial-img-box">
        {imgData.map((user) => (
          <Image
            src={user.testimonial}
            className="hero__testimonial-img"
            placeholder="blur"
            quality={80}
            key={user.testimonial}
            alt={user.testimonial}
          />
        ))}
      </div>
      <div className="hero__testimonial-text-box">
        <p className="hero__testimonial-text">
          <span>+250,000</span> meals served last year!
        </p>
      </div>
    </div>
  );
}

export default HeroTestimonial;
