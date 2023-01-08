import styled from "styled-components";

const Card = styled.div`
  padding: 20px 20px 0 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  width: 280px;
  // copied
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export { Card };
