import formImg from "@/public/form/form-image.webp";
import Image from "next/image";
import Link from "next/link";

function Form() {
  return (
    <section className="section-forms">
      <div className="container">
        <div className="form grid grid--2--cols gap-md">
          <div className="form__text-box">
            <h3 className="heading-3">Create Lasting Memories with Us</h3>
            <h2 className="heading-2 u-margin-bottom-sm">
              Got Questions? Let’s Talk!
            </h2>
            <form>
              <div className="form__group">
                <label className="form__label " htmlFor="fullName">
                  First Name
                </label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Mike"
                  id="fullName"
                />
              </div>

              <div className="form__group">
                <label className="form__label " htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="mike@email.com"
                  id="email"
                />
              </div>
              <div className="form__group">
                <label className="form__label " htmlFor="message">
                  Message
                </label>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Please leave a message"
                  id="message"
                />
              </div>
              <Link href="#" className="btn">
                Submit message
              </Link>
            </form>
          </div>
          <div className="form__img-box">
            <Image
              src={formImg}
              placeholder="blur"
              quality={85}
              alt="form "
              className="form__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
