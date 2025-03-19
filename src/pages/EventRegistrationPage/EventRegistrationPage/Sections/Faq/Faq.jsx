import Faq from "../../../../../components/Faq/Faq";
import styles from "./Faq.module.css";

const { mainDiv, faqQuestions } = styles;

const FaqComponent = () => {
  const faqData = [
    {
      question: "What is Entropedia 2.0?",
      answer:
        "Entropedia 2.0 is an entrepreneurial competition by UPES-CSA in collaboration with Runway Incubator and E-Cell, providing a platform for students to pitch, refine, and develop their startup ideas with expert mentorship.",
    },
    {
      question: "Who can participate?",
      answer:
        "The event is open to all students, regardless of their academic disciplines. Both individual participants and teams (up to a specified limit) can register.",
    },
    {
      question: "What is the event structure?",
      answer:
        "The competition consists of multiple rounds, including a pitch presentation and a prototype demonstration, where teams showcase their business ideas and validate their feasibility.",
    },
    {
      question: "Will participants receive mentorship?",
      answer:
        "Yes, industry experts and startup mentors will guide participants throughout the event, helping them shape their business models and refine their pitches.",
    },
    {
      question:
        "Do I need to have a fully developed startup idea to participate?",
      answer:
        "No, even early-stage ideas are welcome. The event is designed to help participants refine their concepts and turn them into viable business models.",
    },
    {
      question: "What are the benefits of participating?",
      answer:
        "Participants gain valuable entrepreneurial insights, networking opportunities, mentorship, and a chance to win incubation support, funding, or internship opportunities.",
    },
  ];

  return (
    <div className={mainDiv} id="faq">
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
};

export default FaqComponent;
