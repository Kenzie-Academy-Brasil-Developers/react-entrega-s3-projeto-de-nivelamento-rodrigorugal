import { useState } from "react";
import { Button, Formulario, InputStyle, Secao, TitleForm } from "./style";

const CadastroDeProdutos = ({ products, setProducts }) => {
  const [code, setCode] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);

  const handleForm = (data) => {
    console.log(data);
    setProducts([...products, data]);

    setCode(0);
    setName("");
    setDescription("");
    setPrice(0.0);
    setDiscount(0.0);
  };

  return (
    <Formulario>
      <TitleForm>
        <h1>Cadastro de produtos</h1>
      </TitleForm>

      <Secao>
        <label>Codigo do produto</label>
        <InputStyle>
          <input
            type="number"
            placeholder="Codigo do produto"
            value={code}
            onChange={(ev) => setCode(ev.target.value)}
          />
        </InputStyle>
        <label>Nome</label>
        <InputStyle>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </InputStyle>
        <label>Descrição</label>
        <InputStyle>
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </InputStyle>
        <label>Preço</label>

        <InputStyle>
          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </InputStyle>
        <label>Desconto</label>
        <InputStyle>
          <input
            type="number"
            placeholder="Desconto"
            value={discount}
            onChange={(ev) => setDiscount(ev.target.value)}
          />
        </InputStyle>
      </Secao>

      <Secao altura={"10%"}>
        <Button
          type="button"
          onClick={() =>
            handleForm({
              code: Number(code),
              name: name,
              description: description,
              price: Number(price),
              discount: Number(discount),
            })
          }
        >
          Cadastrar
        </Button>
      </Secao>
    </Formulario>
  );
};

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

export default CadastroDeProdutos;
