import SectionHead from "./SectionHead";
import { faqs } from "../data";
import { FaQuestion } from "react-icons/fa6";
import Faq from "./FAQ";

function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQs" className="" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
