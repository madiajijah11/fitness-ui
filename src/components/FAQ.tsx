import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

function Faq({ question, answer }: { question: string; answer: string }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => setIsAnswerShowing((prev) => !prev)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isAnswerShowing ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
}

export default Faq;
