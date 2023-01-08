import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AddCard = styled.div`
  border: 1px solid #ccc;
  width: 200px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
`;

export { Cards, AddCard };
