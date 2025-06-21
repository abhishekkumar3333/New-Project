import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products?limit=150", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          Swal.fire({
            icon: "warning",
            title: "Failed to fetch products",
          });
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((result) => {
        setProduct(result.products);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while fetching products.",
        });
      });
  };

  // Optional: Fetch on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <productContext.Provider value={{ product, fetchProducts }}>
      {children}
    </productContext.Provider>
  );
};
