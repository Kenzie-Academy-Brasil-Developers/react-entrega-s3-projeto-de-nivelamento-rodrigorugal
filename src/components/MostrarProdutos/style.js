import styled from "styled-components";

export const CaixaDeProdutos = styled.ul`
  background-color: #e3e3e3;
  width: ${(props) => props.largura};
  height: ${(props) => props.altura};
  margin-right: 50px;

  overflow-x: auto;

  display: flex;
  align-items: center;
`;
