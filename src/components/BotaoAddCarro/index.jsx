import { BotaoCarrinho } from "./style";
const BotaoAddCarro = ({ altura, MostraDescricao }) => {
  return (
    <BotaoCarrinho onClick={MostraDescricao} altura={altura}>
      Adicionar ao carrinho
    </BotaoCarrinho>
  );
};

export default BotaoAddCarro;
