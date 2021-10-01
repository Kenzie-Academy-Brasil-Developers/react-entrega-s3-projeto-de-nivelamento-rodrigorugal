import BotaoAddCarro from "../BotaoAddCarro";
import { Caixa, ItemLista } from "./style";

const Produto = ({ setCarro, carro, item }) => {
  const MostraDescricao = () => {
    setCarro([...carro, item]);
  };

  return (
    <ItemLista>
      <h3>{item.name}</h3>

      <Caixa altura={"50px"}>
        <p className="valor">
          <span>R${item.price}</span>
        </p>
        <p className="desconto">
          Desconto <span>R${item.discount}</span>
        </p>
      </Caixa>
      <BotaoAddCarro
        altura={"35px"}
        MostraDescricao={MostraDescricao}
      ></BotaoAddCarro>
    </ItemLista>
  );
};

export default Produto;
