import Produto from "../Produto";
import { CaixaDeProdutos } from "./style";

const MostrarProdutos = ({ carro, setCarro, products }) => {
  return (
    <CaixaDeProdutos largura={"550px"} altura={"250px"}>
      <div>
        {products.map((item) => (
          <Produto setCarro={setCarro} carro={carro} item={item} />
        ))}
      </div>
    </CaixaDeProdutos>
  );
};

export default MostrarProdutos;
