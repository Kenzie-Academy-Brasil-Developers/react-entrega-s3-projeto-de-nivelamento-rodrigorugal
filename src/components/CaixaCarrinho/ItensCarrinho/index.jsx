import { ListaUl } from "../style";
import { ItemListaCarro } from "./style";

const ItensCarrinho = ({ carro }) => {
  return (
    <ListaUl>
      <div>
        {carro &&
          carro.map((item) => (
            <ItemListaCarro>
              <h3>{item.name}</h3>
              <div>
                <p className="valor">
                  <span>R${item.price}</span>
                </p>
                <p className="desconto">
                  Desconto <span>R${item.discount}</span>
                </p>
              </div>
            </ItemListaCarro>
          ))}
      </div>
    </ListaUl>
  );
};
export default ItensCarrinho;
