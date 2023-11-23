function ShoppingCart({ cartItems, emptyCart }) {
  return (
    <div>
      <h1 className="mt-12">Order</h1>
    <div className="grid grid-rows-2 grid-flow-col gap-4 mt-20">
      
      {cartItems.map((item) => (
        <div key={item.id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg"  src={item.image} alt={item.name} />
          <p style={{  fontSize: '20px', fontWeight: 'bold' }}>{item.name}</p>
        </div>
      ))}
      
    </div>
    <br />
    <button className="glass mt-2 bg-cyan-950" onClick={emptyCart}>Order Now</button>
    </div>
  );
}

export default ShoppingCart;
