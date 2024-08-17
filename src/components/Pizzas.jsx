function Pizzas({ pizzaObj }) {
  return (
    <li
      className={`pizza ${pizzaObj.soldOut && 'sold-out'}`}
      key={pizzaObj.name}
    >
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizzas;
