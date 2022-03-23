import React from "react";
import MainFAQ from "../MainFAQ";
import MainImage from "../MainImage";
import { Content, Wrapper } from "./FAQ.styles";

const FAQ = () => {
  return (
    <Wrapper>
      <Content>
        <MainImage></MainImage>
        <MainFAQ></MainFAQ>
      </Content>
    </Wrapper>
  );
};

export default FAQ;
