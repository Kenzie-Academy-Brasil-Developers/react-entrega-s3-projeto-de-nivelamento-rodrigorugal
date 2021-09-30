import styled from "styled-components";

export const ItemLista = styled.li`
  text-align: center;
  background-color: #a3a3a3;
  min-width: 155px;
  max-width: 155px;
  height: 230px;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid red;
  cursor: pointer;
  position: relative;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 500;
    font-style: oblique;
    margin-bottom: 10px;
  }
  .caixa_de_info {
    height: 150px;
  }

  .valor {
    color: #0b3448;
  }
  .desconto {
    color: #c5c5c5;
  }
`;

export const Caixa = styled.div`
  height: ${(props) => props.altura};
  width: ${(props) => props.largura};
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow-y: ${(props) => props.rolagem};
`;
