import React, { useContext } from 'react';
import { productContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate =useNavigate()
     
  const { cartItem, setCartItem, setCartCount } = useContext(productContext);
  console.log(cartItem)

  const handleRemove = (id) => {
    const updatedCart = cartItem.filter(item => item.id !== id);
    setCartItem(updatedCart);
    setCartCount(updatedCart.length); // ✅ update count
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItem.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="container">
      <h2 className='cheadingart-'>Your Shopping Cart</h2>

      {cartItem.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="cart-list">
          {cartItem.map(item => (
              <div className="product-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="brand">{item.brand}</p>
            <p className="price">${item.price}</p>
          <p className="availability">{item.availability}</p>

           <button onClick={() => navigate(`/product/${item.id}`)}>View Details</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>



          </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        Grand Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
