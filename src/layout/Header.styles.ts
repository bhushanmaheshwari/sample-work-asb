import styled from "styled-components";

const Header = styled.header``;

const HeaderNav = styled.ul`
  display: flex;
  gap: 10px;
  text-decoration: none;
  list-style: none;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    text-transform : uppercase;
  }
`;

export { Header, HeaderNav };
