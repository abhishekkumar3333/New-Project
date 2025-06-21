import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
const AllProducts = () => {
    const navigate = useNavigate()
  const { product, fetchProducts } = useContext(productContext);
  const [currentPage,setCurrentPage] = useState(1);
  const itemPerPage =  8;
  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentProducts = product.slice(firstIndex,lastIndex);
  const totalPages = Math.ceil(product.length / itemPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);



  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="all-products-container">
      <h2 className="all-products-title">All Products</h2>

      <div className="products-grid">
        {currentProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="brand">{item.brand}</p>
            <p className="price">${item.price}</p>
            <p className="availability">{item.availabilityStatus}</p>
           <button onClick={() => navigate(`/product/${item.id}`)}>View Details</button>

          </div>
        ))}
      </div>

      {/* /pagination */}
     <div className="pagination-container">
  {pageNumbers.map((number) => (
    <span
      key={number}
      className={`page-pill ${number === currentPage ? 'active' : ''}`}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </span>
  ))}
</div>

    </div>
  );
};

export default AllProducts;
