import styled from "styled-components";

export const ContainerCarrinho = styled.div`
  background-color: #e3e3e3;
  max-height: 100vh;
  height: 100vh;
  width: 250px;
  overflow: ${(props) => props.rolar};
`;

export const ListaUl = styled.ul`
  background-color: #e3e3e3;
  max-height: 94%;
  min-width: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
`;
