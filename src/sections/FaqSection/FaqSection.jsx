import { forwardRef } from "react";
import Faq from "../../components/Faq/Faq";

import styles from "./FaqSection.module.css";

const { mainDiv, faqQuestions } = styles;

const FaqSection = forwardRef((props, ref) => {
  const faqData = [
    {
      question: "What is AWS Community Day Dehradun?",
      answer:
        "AWS Community Day Dehradun is a community-led event organized by AWS User Group Dehradun. It brings together cloud enthusiasts, industry experts, and developers to share knowledge, discuss innovative solutions, and network with peers.",
    },
    {
      question: "Who can attend AWS Community Day 2025?",
      answer:
        "The event is open to anyone interested in AWS and cloud computing, including developers, students, IT professionals, and business leaders.",
    },
    {
      question: "When and where will AWS Community Day 2025 be held?",
      answer:
        "AWS Community Day 2025 is scheduled to take place on 10 September 2025, at UPES, Dehradun. Stay tuned for updates on the official website or social media channels.",
    },
    {
      question: "Is there a participation fee for the event?",
      answer: "AWS Community Day Dehradun 2025 is paid.",
    },
    {
      question: "Will there be a certificate for attendees?",
      answer:
        "Yes, attendees will receive a certificate of participation after the event.",
    },
    {
      question: "How can I stay updated about the event?",
      answer:
        "Follow us on social media or check our website regularly for the latest updates.",
    },
    {
      question: "What can I expect from the event?",
      answer:
        "Keynote Sessions: Insights from AWS experts and community leaders. Workshops: Hands-on sessions on AWS technologies. Networking Opportunities: Meet industry peers and AWS professionals. Goodies and Prizes: Exciting giveaways for attendees and participants.",
    },
  ];

  return (
    <div
      className={mainDiv}
      id="faq"
      ref={ref}
      style={{ scrollMarginTop: "80px" }}
    >
      <h1 className="heading" style={{ marginInline: "1.5rem" }}>
        Frequently Asked Questions
      </h1>
      <div className={faqQuestions}>
        {faqData.map((faq, index) => (
          <Faq
            key={index}
            questionId={"faqQuestion" + index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
});

export default FaqSection;
