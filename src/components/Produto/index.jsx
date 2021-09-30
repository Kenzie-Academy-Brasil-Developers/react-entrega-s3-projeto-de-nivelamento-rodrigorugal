import { ItemLista } from "./style";

const Produto = ({ item: { name, description, price, discount } }) => {
  return (
    <ItemLista>
      <h3>{name}</h3>

      <p className="valor">
        <span>R${price}</span>
      </p>
      <p className="desconto">
        Desconto <span>R${discount}</span>
      </p>
    </ItemLista>
  );
};

export default Produto;
