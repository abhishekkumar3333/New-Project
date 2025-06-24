import React, { createContext, useState, useEffect } from "react";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products?limit=150")
      .then((res) => res.json())
      .then((data) => setProduct(data.products))
      .catch((err) => console.log("Error fetching products", err));
  };

  const handleCartItems = (item) => {
    const newItem = {
      id: item.id,
      thumbnail: item.thumbnail,
      title: item.title,
      brand: item.brand,
      price: item.price,
      availability: item.availability || "In stock",
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = existingCart.some((cart) => cart.id === newItem.id);

    if (!itemExists) {
      const updatedCart = [...existingCart, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItem(updatedCart);
      setCartCount(updatedCart.length);
    }
  };

  useEffect(() => {
    fetchProducts();
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(savedCart);
    setCartCount(savedCart.length);
  }, []);

  return (
    <productContext.Provider
      value={{
        product,
        fetchProducts,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        handleCartItems
      }}
    >
      {children}
    </productContext.Provider>
  );
};
