import { FC } from "react";
import { Link } from "react-router-dom";
import { Header, HeaderNav } from "./Header.styles";

const HeaderComponent: FC = () => {
  return (
    <Header>
      <HeaderNav>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/cards">CARDS</Link>
        </li>
      </HeaderNav>
    </Header>
  );
};

export default HeaderComponent;
