import { HiArrowRight } from "react-icons/hi";

const FAQ = ({ question, answer, FAQKey, activeFAQ, updateactive }) => {
  return (
    <div className="faq-flex">
      <div className={FAQKey === activeFAQ ? "faq active" : "faq"}>
        <div
          className="faq-question"
          onClick={() => {
            if (FAQKey === activeFAQ) {
              updateactive(0);
            } else {
              updateactive(FAQKey);
            }
          }}
        >
          <p> {question} </p>
          <HiArrowRight />
        </div>
        <div className="faq-answer">
          <p> {answer} </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
