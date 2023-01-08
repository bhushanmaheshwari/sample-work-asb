import styled from "styled-components";

const FormContainer = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid #ccc;
  // copied
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
`;

const FormControl = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  input,
  input:focus {
    display: block;
    width: 100%;
    color: #494844;
    background-color:#fff;
    padding: 0.5rem 0;
    outline: 0;
    border: none;
    border-bottom: 1px solid #494844;
    font: inherit;
    margin-bottom: 0.5rem;
  }
`;

const FormActions = styled.div`
  button {
    font: inherit;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }

  button:hover,
  button:active {
    background-color: #eee;
    border-color: #eee;
  }
`;

const FormCardIcon = styled.div`
  img {
      width : 50px;
      height : 33px;
      float: right;
      position: relative;
      top : -40px;
  }
`;

export { FormContainer, FormControl, FormActions, FormCardIcon };
