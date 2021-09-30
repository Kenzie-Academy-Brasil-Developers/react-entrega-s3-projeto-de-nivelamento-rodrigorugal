import { Button, Formulario, InputStyle, Secao, TitleForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CadastroDeProdutos = ({ products, setProducts }) => {
  const schema = yup.object().shape({
    code: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    discount: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    setProducts([...products, data]);
  };

  return (
    <Formulario onSubmit={handleSubmit(handleForm)}>
      <TitleForm>
        <h1>Cadastro de produtos</h1>
      </TitleForm>

      <Secao>
        <InputStyle>
          <input
            type="text"
            placeholder="Codigo do produto"
            {...register("code")}
            error={!!errors.code}
            helperText={errors.code?.message}
          />
        </InputStyle>
        <InputStyle>
          <input
            type="text"
            placeholder="Nome"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </InputStyle>
        <InputStyle>
          <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </InputStyle>
        <InputStyle>
          <input
            type="number"
            placeholder="Preço"
            {...register("price")}
            error={!!errors.price}
            helperText={errors.price?.message}
          />
        </InputStyle>
        <InputStyle>
          <input
            type="number"
            placeholder="Desconto"
            {...register("discount")}
            error={!!errors.discount}
            helperText={errors.discount?.message}
          />
        </InputStyle>
      </Secao>

      <Secao altura={"10%"}>
        <Button type="submit">Cadastrar</Button>
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
