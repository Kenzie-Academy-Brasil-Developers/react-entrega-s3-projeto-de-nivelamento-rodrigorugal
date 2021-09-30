import Produto from "../Produto";
import { CaixaDeProdutos } from "./style";

const MostrarProdutos = ({ products }) => {
  return (
    <CaixaDeProdutos largura={"500px"} altura={"450px"}>
      {products.map((item) => (
        <Produto item={item} />
      ))}
    </CaixaDeProdutos>
  );
};

export default MostrarProdutos;
