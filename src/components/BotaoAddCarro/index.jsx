import { BotaoCarrinho } from "./style";
const BotaoAddCarro = ({ altura, largura }) => {
  return (
    <BotaoCarrinho type="submit" altura={altura}>
      Adicionar ao carrinho
    </BotaoCarrinho>
  );
};

export default BotaoAddCarro;
