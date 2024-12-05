"use client";

import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is the dress code at Belle Étoile?",
    answer:
      "At Belle Étoile, we embrace an elegant yet comfortable atmosphere. Our recommended dress code is smart casual—perfectly blending style and comfort. For special evenings and events, semi-formal attire will elevate your experience and complement the ambiance.",
  },
  {
    id: 2,
    question: "Can you accommodate dietary restrictions or special requests?",
    answer:
      "Absolutely! Our chefs take pride in creating personalized dining experiences. Whether you're vegetarian, vegan, gluten-free, or have specific allergies, we’re here to accommodate your needs. Simply let us know in advance or upon arrival, and we’ll craft a meal tailored to your preferences.",
  },
  {
    id: 3,
    question: "Do you offer private dining or event hosting?",
    answer:
      "Yes, Belle Étoile features exclusive private dining rooms and event spaces for intimate gatherings, celebrations, and corporate events. Our team will work with you to curate a customized experience, from menu planning to décor. Advance booking is recommended to secure your date.",
  },
  {
    id: 4,
    question: "Is there a dedicated menu for children?",
    answer:
      "Yes, we believe in catering to diners of all ages. Our children’s menu is thoughtfully designed with healthy, delicious, and kid-friendly options that even the pickiest eaters will enjoy. High chairs and child-friendly amenities are also available upon request.",
  },
  {
    id: 5,
    question: "How can I make a reservation?",
    answer:
      "Reserving a table at Belle Étoile is simple. You can book directly through our website or call us for personalized assistance. We recommend booking in advance, especially for weekends and special occasions, to ensure your preferred time and seating.",
  },
  {
    id: 6,
    question: "What are your operating hours, and do you accept walk-ins?",
    answer:
      "We’re open from 12:00 PM to 11:00 PM on weekdays and 11:00 AM to 12:00 AM on weekends. While reservations are recommended to secure your preferred table, we do accept walk-ins based on availability. To ensure a seamless experience, especially during peak hours or special occasions, we suggest booking in advance.",
  },
];

function FAQS() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <section className="section-faqs">
      <div className="container">
        <h3 className="heading-3">Have Questions?</h3>
        <h2 className="heading-2">Frequently Asked Questions</h2>
        <p className="paragraph">
          Find answers to common inquiries about our dining experience,
          reservations, and special services. If you need more information, feel
          free to reach out!
        </p>
      </div>

      <div className="container grid gap-md">
        {faqData.map((faq) => (
          <div key={faq.id} className="flex">
            <h4
              className="heading-4 gold"
              onClick={() =>
                setSelectedId(selectedId === faq.id ? null : faq.id)
              }
            >
              {faq.question}
            </h4>
            {selectedId === faq.id && <p className="paragraph">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQS;
