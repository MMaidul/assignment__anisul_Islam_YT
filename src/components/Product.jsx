import React from 'react'

const Product = ({ product }) => {
  const { image, title, price, rating, description } = product
  console.log('product cmp', product)
  return (
    <div>
      <article className="products">
        <img className="product__img" src={image} alt="product img" />
        <div className="product__details">
          <h4 className="product__title">{title}</h4>
          <p className="product__price">Price: $ {price}</p>
          <p className="product__rating">Rating:{rating?.rate}</p>
          <p className="product__desc">{description}</p>
          <button className="product__btn btn">Add to cart</button>
        </div>
      </article>
    </div>
  )
}

export default Product
