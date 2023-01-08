import styled from "styled-components";

const Card = styled.div<{ colorCode: string; archived: boolean }>`
  padding: 20px 20px 0 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  width: 300px;
  background: ${(props) => `linear-gradient(50deg, ${props.colorCode}, #eee)`};
  opacity: ${(props) => (props.archived ? 0.5 : 1)};
  // copied
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

const CardHeader = styled.div`
  padding: 15px 0;
`;

const CardIcon = styled.div`
  img {
    width: 50px;
    height: 33px;
    float: right;
    margin-top: -30px;
    position: relative;
  }
`;

const CardTitle = styled.div`
  font-size: 24px;
  padding: 10px 0 5px 0;
  font-weight: 600;
`;

const CardBody = styled.div`
  padding: 20px 0;
  display: flex;
  min-height: 30px;
  justify-content: space-between;
`;

const CardFooter = styled.div`
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const Archived = styled.div`
  text-transform: uppercase;
  background: #000;
  color: #fff;
  padding: 5px;
`;

export {
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardBody,
  CardFooter,
  Archived,
};
