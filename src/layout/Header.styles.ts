import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderNav = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;

  a,
  button {
    margin: 5px;
    padding: 10px;
    background-color: transparent;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
  }

  a {
    font-weight: 600;
  }

  button {
    border: 1px solid #ccc;
  }
`;

const ProfilePicture = styled.div`
  margin-right: 30px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export { Header, HeaderNav, ProfilePicture };
