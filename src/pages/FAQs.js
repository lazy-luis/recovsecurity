import { useState } from "react";
import FAQ from "../components/FAQ";

const FAQs = () => {
  const [activeFAQ, FAQState] = useState(1);

  const updateactive = (newActive) => {
    FAQState(newActive);
  };
  return (
    <div className="faqs-page">
      <h4> Frequently Asked Questions </h4>
      <div className="faqs-flex">
        <FAQ
          question="What is Recover Security?"
          answer="We are a team of industry professionals who know exactly how to get your money back in the shortest time-frame. Our goal here is to help you recover money you might have lost to online scams. Our methods are 100% legal and also hassle free. We carry you along and we are very dedicated and transparent in our approach."
          FAQKey={1}
          activeFAQ={activeFAQ}
          updateactive={updateactive}
        />
        <FAQ
          question="What is the process?"
          answer="The process starts from you contacting us through the form on our site or by contacting us through our other available channels. Your case is reviewed and then based on the intelligence we have gathered on the company in question , we determine the best line of action to recover your money."
          FAQKey={2}
          activeFAQ={activeFAQ}
          updateactive={updateactive}
        />
        <FAQ
          question="What are the chances of getting my money back?"
          answer="After a thorough review of your case, we will give you our professional analysis of your chances of success. Each case we accept has unique characteristics and requires slightly different strategies necessary to recover your funds. Please contact us to review your case."
          FAQKey={3}
          activeFAQ={activeFAQ}
          updateactive={updateactive}
        />
        <FAQ
          question="Can pursuing my money be a complete waste of my time?"
          answer="If it is, we'll tell you upfront and explain why. We do not accept cases that present insurmountable obstacles. With a few general and specific questions about your case, we can determine if our services would be of benefit to you. We do understand the sensitives involved and all matters are kept confidential."
          FAQKey={4}
          activeFAQ={activeFAQ}
          updateactive={updateactive}
        />
        <FAQ
          question="Is it possible to get my money back?"
          answer="It definitely is. We conduct a case by case analysis to determine the probability of recovery of funds."
          FAQKey={5}
          activeFAQ={activeFAQ}
          updateactive={updateactive}
        />
      </div>
    </div>
  );
};

export default FAQs;
