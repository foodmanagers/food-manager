function ShoppingCart({ cartItems, emptyCart }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
      <button onClick={emptyCart}>Purchase Now</button>
    </div>
  );
}

export default ShoppingCart;
