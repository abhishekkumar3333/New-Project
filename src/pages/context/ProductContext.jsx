import React, { createContext, useState, useEffect } from "react";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);

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
      setCartItem(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products?limit=150")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProduct(data.products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(savedCart);
  }, []);

  return (
    <productContext.Provider value={{
      product,
      fetchProducts,
      cartItem,
      handleCartItems,
      setCartItem
    }}>
      {children}
    </productContext.Provider>
  );
};