import React, { useState } from "react";
import "./Faq.css";
const TutroFaq = [
  {
    number: "01",
    question: " How can we contact for the tuition?",
    answer:
      "here are two simple ways of contacting us- 1.On our website click registration 2. Call or whatsapp us on the contact no. given",
  },
  {
    question:
      " What will be the approximate distance tutors will have to cover for the Home Tuitions?",
    answer:
      " Our team provides home tuitions in the near by locality of the tutors. Maximum distance could be 10-15 km not more.",
  },
  {
    question: " What are the eligibility criteria for the Home tutors?",
    answer:
      "We look up for class 12th/graduation/post graduation pass outs and students, with great academic excellence and a passion for teaching.",
  },
  {
    question: " What will be the monthly salary of a Home Tutor?",
    answer:
      "The salary of the Home Tutors depend on some factors like- qualification, class you are teaching, subjects you are teaching and work experience.",
  },
  {
    question:
      " Do the Personal Home Tutors need to submit any sort of documents?",
    answer:
      "Yes, the tutors are requested to submit your qualification/ experience certificates, id proof and local address proof.",
  },
];

const Accordian = ({ data, heading }) => {
  const [active, setActive] = useState(0);
  const clickHandler = (index) => {
    if (index === active) {
      setActive(0);
      return;
    }
    setActive(index);
  };
  return (
    <div className="accordiancontainer">
      <h1 className="accordianheading">{heading}</h1>
    <hr />
      {data.map((item, index) => (
        <div className="AccordianActive">
        <div key={index} className="accordian"
        >
          <div
            className={index + 1 === active ? "question active" : "question"}
            onClick={() => {
              clickHandler(index + 1);
            }}
          >
            {/* <i
              className={
                index + 1 === active
                  ? "questiontriagnleicon fa-solid fa-angle-up"
                  : "questiontriagnleicon fa-solid fa-angle-down"
              }
            ></i> */}
            <div className="FaqQuestions">
            <span className="FAQnumber"><h1>0{index + 1}</h1></span> 
              {" "}
                <h2>{item.question}</h2>
            </div>
          </div>
          <div className={index + 1 === active ? "answer show" : "answer"}>
            <p className="FAQAns">
              {" " + item.answer}
            </p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};
const Faq = () => {
  return (
    <div className="FaqMainContainer">
      <div className="FaqContainer container">
        <div className="allaccordians">
          <Accordian data={TutroFaq} heading="FAQ" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
