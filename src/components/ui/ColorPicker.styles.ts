import styled from "styled-components";

const ColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const ColorBox = styled.div<{ colorCode: string; border: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.colorCode};
  border: ${(props) => (props.border ? "5px solid #ccc" : "5px solid #fff")};
`;

export { ColorPalette, ColorBox };
