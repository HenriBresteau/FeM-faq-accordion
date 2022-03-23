import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  @media screen and (min-width: 1440px) {
    padding: 64px 32px;
  }
  h1 {
    text-align: center;
    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
  .accordion {
    padding: 4px;
    transition: 0.3s;
    cursor: pointer;
    @media screen and (min-width: 1440px) {
      min-width: 354px;
    }
  }
  .accordion-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    transition: 0.3s ease;
    &:hover {
      color: var(--SoftRed);
    }
  }
  p {
    font-size: 12px;
    color: var(--h2-gray);
  }
  .arrow {
    .normal {
      transition: 0.5s ease;
      transform: rotate(1turn);
    }
    .active {
      transition: 0.5s ease;
      transform: rotate(0.5turn);
    }
  }
`;
export const Divider = styled.hr`
  border: 1px solid var(--divider);
  background: var(--divider);
`;
