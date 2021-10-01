import styled from "styled-components";

export const ItemLista = styled.li`
  text-align: center;
  background-color: #a3a3a3;

  height: 230px;
  margin: 5px;
  padding: 5px;
  min-width: 95%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 500;
    font-style: oblique;
    margin-bottom: 10px;
    height: 100px;
  }
  .caixa_de_info {
    height: 150px;
  }

  .valor {
    background-color: #0b3448;
    color: #e3e3e3;
    padding: 3px 0;
    width: 100%;
  }
  .desconto {
    background-color: orange;
    padding: 3px;
    color: #0b3448;
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
