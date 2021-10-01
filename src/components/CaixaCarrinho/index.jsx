import ItensCarrinho from "./ItensCarrinho";

import { ContainerCarrinho } from "./style";
import ValorCarrinho from "./ValorCarrinho";

const CaixaCarrinho = ({ carro }) => {
  return (
    <ContainerCarrinho>
      <ValorCarrinho carro={carro} />
      <ItensCarrinho carro={carro} />
    </ContainerCarrinho>
  );
};

export default CaixaCarrinho;
