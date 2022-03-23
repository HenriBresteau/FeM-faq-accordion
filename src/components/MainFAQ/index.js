import React from "react";
import { Divider, Wrapper } from "./MainFAQ.styles";
import { questions } from "../../questions";
import Accordion from "./Accordion";

const MainFAQ = () => {
  return (
    <Wrapper>
      <h1>FAQ</h1>
      <div className="accordion">
        {questions.map((question) => (
          <>
            <Accordion title={question.question} content={question.respons} />
            <Divider />
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export default MainFAQ;
