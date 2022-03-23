import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: var(--minWidth);
  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
