import { FC } from "react";
import { Footer, FooterLinks } from "./Footer.styles";

const FooterComponent :FC = () => {
    return <Footer>
       <p>
           <small>Developed by</small>&nbsp;
           <b>Bhushan Maheshwari</b>
       </p>
       <FooterLinks>
           <a href="https://github.com/bhushanmaheshwari" target="_blank" rel="noreferrer">GitHub</a>
           |<a href="https://linkedin.com/in/bhushanmaheshwari" target="_blank" rel="noreferrer">LinkedIn</a>
           |<a href="mailtp:bhushan.maheshwari@gmail.com" target="_blank" rel="noreferrer">Email</a>
       </FooterLinks>
    </Footer>
};

export default FooterComponent;
