import { useState } from "react";
import BotaoAddCarro from "../BotaoAddCarro";
import { Caixa, ItemLista } from "./style";

const Produto = ({ item: { name, description, price, discount } }) => {
  const AddCarro = (data) => {};

  const [mostra, setMostra] = useState(true);

  const MostraDescricao = () => {
    setMostra(!mostra);
  };

  return (
    <ItemLista onClick={MostraDescricao}>
      <h3>{name}</h3>
      {mostra ? (
        <Caixa altura={"100px"}>
          <p className="valor">
            <span>R${price}</span>
          </p>
          <p className="desconto">
            Desconto <span>R${discount}</span>
          </p>

          <BotaoAddCarro
            type="submit"
            altura={"35px"}
            onClick={AddCarro}
          ></BotaoAddCarro>
        </Caixa>
      ) : (
        <Caixa rolagem={"auto"}>
          <p>{description}</p>
        </Caixa>
      )}
    </ItemLista>
  );
};

export default Produto;
