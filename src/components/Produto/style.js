import styled from "styled-components";

export const ItemLista = styled.li`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  text-align: center;
  background-color: #a3a3a3;
  width: 155px;
  height: 205px;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-size: 20px;
    font-weight: 500;
    font-style: oblique;
  }

  .valor {
    color: #0b3448;
  }
  .desconto {
    color: #c5c5c5;
  }
`;
