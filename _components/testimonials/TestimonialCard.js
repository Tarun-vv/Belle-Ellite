import Image from "next/image";


function TestimonialCard({ testimonialData }) {
  const { imgUrl, userName, userHeading, userText } = testimonialData;
  return (
    <div className="testimonial__box">
      <div className="testimonial__img-box ">
        <Image
          src={imgUrl}
          alt="user"
          // placeholder="blur"
          quality={80}
          className="testimonial__img"
        />
        <span className="testimonial__img-text">{userName}</span>
      </div>
      <div className="testimonial__text-box">
        <h4 className="heading-4 u-margin-bottom-sm">{userHeading}</h4>
        <p className="testimonial__text">&quot;{userText}&quot;</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
