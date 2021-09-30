/*  
    - Deve Retornar um formulário para o cadastro de produtos
    - Deve criar um objeto 
    EXEMPLO {
        codigo: 123,
        name: "Nome do produto",
        drescicao: "Texto sobre o produto",
        preco: 10,
        desconto: -2
    }
*/

import { Button, Formulario, InputStyle, Secao, TitleForm } from "./style";

const CadastroDeProdutos = ({ setProducts }) => {
  return (
    <Formulario>
      <TitleForm>
        <h1>Cadastro de produtos</h1>
      </TitleForm>

      <Secao>
        <InputStyle>
          <input type="text" placeholder="Codigo do produto" />
        </InputStyle>
        <InputStyle>
          <input type="text" placeholder="Nome" />
        </InputStyle>
        <InputStyle>
          <input type="text" placeholder="Descrição" />
        </InputStyle>
        <InputStyle>
          <input type="text" placeholder="Preço" />
        </InputStyle>
        <InputStyle>
          <input type="text" placeholder="Desconto" />
        </InputStyle>
      </Secao>

      <Secao altura={"10%"}>
        <Button>Cadastrar</Button>
      </Secao>
    </Formulario>
  );
};

export default CadastroDeProdutos;
