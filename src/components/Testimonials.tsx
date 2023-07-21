import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { testimonials } from "../data";
import {
  FaQuoteLeft,
  FaCircleArrowLeft,
  FaCircleArrowRight,
} from "react-icons/fa6";
import { useState } from "react";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === 0 ? testimonials.length - 1 : prevState - 1;
    });
  };
  const nextTestimonialHandler = () => {
    setIndex((prevState) => {
      return prevState === testimonials.length - 1 ? 0 : prevState + 1;
    });
  };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<FaQuoteLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{quote}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHandler}
          >
            <FaCircleArrowLeft />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonialHandler}
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
