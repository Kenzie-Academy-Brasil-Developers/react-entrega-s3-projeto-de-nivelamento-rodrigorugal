import styled from "styled-components";

export const Formulario = styled.form`
  width: 300px;
  height: 600px;
  background-color: #e3e3e3;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Secao = styled.section`
  width: 100%;
  height: ${(props) => (props.altura ? props.altura : "50%")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputStyle = styled.div`
  width: 80%;
  height: 30px;
  background-color: aliceblue;
  border: 1.5px solid black;

  &:hover {
    border-color: brown;
  }

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  input {
    height: 100%;
    width: 95%;
    border: none;
    background-color: transparent;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const TitleForm = styled.div`
  width: 80%;
  height: 30px;
  border-bottom: 1px solid #0a0a0a;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-size: 22px;
    color: #0a0a0a;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: ${(props) => (props.altura ? props.altura : "30px")};
  border: 1.5px solid #0a0a0a;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-color: brown;
    background-color: #0a0a0a22;
  }
`;
