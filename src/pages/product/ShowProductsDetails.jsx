import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../../Components/spiner/Spiner';
import user1 from '../../assets/about-11-1-1.webp';
import user2 from '../../assets/blog-8-2.webp';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [bgColor, setBgColor] = useState('');
  const [likeProduct, setLikeProduct] = useState('');

  const handleProductLike = (love) => {
    setLikeProduct(love);
  };

  const handleColorClicked = (color) => {
    setBgColor(color);
  };

  const showSingleProduct = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          console.log('not get any product');
        }
        return res.json();
      })
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    showSingleProduct();
  }, [id]);

  if (!product) return <Spinner />;

  return (
    <>
      <div className="product-detail-wrapper">
        <div className="product-cards">
          <div className="image-section" style={{ backgroundColor: bgColor }}>
            <img src={product.thumbnail} alt={product.title} className="main-image" />
          </div>

          <div className="info-section">
            <h2 className="title">{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>

            <div className="options-container">
              <h3>Available Options</h3>
              <div className="options-row">
                <div className="label">Color</div>
                <div className="colors">
                  <span className="color blue" onClick={() => handleColorClicked('blue')}></span>
                  <span className="color orange" onClick={() => handleColorClicked('orange')}></span>
                  <span className="color purple" onClick={() => handleColorClicked('purple')}></span>
                  <span className="color green" onClick={() => handleColorClicked('green')}></span>
                </div>
              </div>

              <div className="options-row">
                <div className="label">Size</div>
                <div className="sizes">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <span key={size} className="size-box">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="options-row">
                <div className="label">Quantity :</div>
                <div className="quantity-box">
                  <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add-cart">Add To Cart</button>
                <button className="icon-btn" style={{ background: likeProduct }} onClick={() => handleProductLike('red')}>
                  ♡
                </button>
                <button className="icon-btn">⤢</button>
              </div>
            </div>

            <div className="additional-details">
              <p>
                <strong>Discount:</strong> {product.discountPercentage}%
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {product.rating}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
            </div>

            <Link to="/AllProducts" className="back-button">
              ← Back to All Products
            </Link>
          </div>
        </div>
      </div>

      {/* ADDITIONAL DESCRIPTION + COMMENTS SECTION */}
      <div className="product-description-wrapper">
        <section className="description-section">
          <h3 className="section-title">Description</h3>
          <p>
            Lorem ipsum dolor sit amet sectetur adipiscing elit cras feugiat antesed ces condimentum viverra duis autue nim
            convallis id diam vitae duis egety dictum erosin dictum sem. Vivamus sed molestie sapien aliquam et facilisis
            arcu dut molestie augue suspendisse sodales tortor nuncend quis cto ligula posuere cursus keuis aute irure
            dolor in reprehenderit in voluptate velit esse cill doloreeu fugiat nulla pariatur.
          </p>
          <p>
            Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor nunc quis auctor ligula posuere cursus
            duis aute irure dolor in reprehenderit in voluptate velit esse cill doloreeu fugiat nulla pariatur excepteur
            sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="comments-section">
          <h3 className="section-title">2 Comments</h3>

          <div className="comment-box">
            <img src={user1} alt="Jessica Brown" className="comment-avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <div>
                  <h4>Jessica Brown</h4>
                  <span className="comment-date">20 May, 2020 . 4:00 pm</span>
                </div>
                <div className="comment-rating">★★★★★</div>
              </div>
              <p>
                Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor nunc quis auctor ligula posuere
                cursus duis aute irure dolor in reprehenderit in voluptate velit esse cill doloreeu fugiat nulla pariatur
                excepteur sint.
              </p>
            </div>
          </div>

          <div className="comment-box">
            <img src={user2} alt="David Martin" className="comment-avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <div>
                  <h4>David Martin</h4>
                  <span className="comment-date">20 May, 2020 . 4:00 pm</span>
                </div>
                <div className="comment-rating">★★★★★</div>
              </div>
              <p>
                Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor nunc quis auctor ligula posuere
                cursus duis aute irure dolor in reprehenderit in voluptate velit esse cill doloreeu fugiat nulla pariatur
                excepteur sint.
              </p>
            </div>
          </div>
        </section>
        <section className="add-review-section">
  <h3 className="section-title">Add a Review</h3>

  <label className="rate-label">Rate this Product?</label>
  <div className="review-stars">⭐⭐⭐⭐⭐</div>

  <form className="review-form">
    <textarea className="review-message" placeholder="Write Message" rows="5" />

    <div className="review-fields">
      <input type="text" className="review-input" placeholder="Your Name" />
      <input type="email" className="review-input" placeholder="Email Address" />
    </div>

    <button type="submit" className="submit-review">Submit Review</button>
  </form>
</section>

      </div>
    </>
  );
};

export default ProductDetails;
