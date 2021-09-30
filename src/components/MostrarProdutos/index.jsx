import Produto from "../Produto";
import { CaixaDeProdutos } from "./style";

const MostrarProdutos = ({ products }) => {
  return (
    <CaixaDeProdutos largura={"400px"} altura={"400px"}>
      <ul>
        {products.map((item) => (
          <Produto item={item} />
        ))}
      </ul>
    </CaixaDeProdutos>
  );
};

export default MostrarProdutos;
