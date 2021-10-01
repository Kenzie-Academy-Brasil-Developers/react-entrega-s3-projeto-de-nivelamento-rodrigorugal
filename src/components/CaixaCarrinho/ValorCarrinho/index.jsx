const ValorCarrinho = ({ carro }) => {
  console.log(carro);
  return (
    <div>
      <div>
        {" "}
        Total carrinho:{" "}
        {carro
          .reduce((anterior, atual) => anterior + atual.price, 0)
          .toFixed(2)}
      </div>
      <div>
        Total desconto:{" "}
        {carro
          .reduce((anterior, atual) => anterior + atual.discount, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export default ValorCarrinho;
