import styled from "styled-components";
import bgMobile from "../../images/illustration-woman-online-mobile.svg";
import bgPatternM from "../../images/bg-pattern-mobile.svg";
import bgDesktop from "../../images/illustration-woman-online-desktop.svg";
import bgPatternD from "../../images/bg-pattern-desktop.svg";
import bgLogo from "../../images/illustration-box-desktop.svg";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 236px;
  height: 80px;
  position: relative;

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 100%;
    min-height: 600px;
  }
`;
export const Image = styled.div`
  background-image: url(${bgPatternM}), url(${bgMobile});
  background-repeat: no-repeat;
  background-position: bottom center, top center;
  width: 236px;
  height: 212px;
  position: absolute;
  top: -110px;
  @media screen and (min-width: 1440px) {
    position: relative;
    background-image: url(${bgPatternD}), url(${bgDesktop});
    background-position: right center, right center;
    width: 400px;
    height: 100%;
    top: unset;
    &::after {
      content: "";
      position: absolute;
      background-image: url(${bgLogo});
      background-repeat: no-repeat;
      width: 191px;
      height: 184px;
      top: 45%;
      left: -120px;
    }
  }
`;
