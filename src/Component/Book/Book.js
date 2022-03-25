import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, picture, price } = props.product;
    const { handleAddToCart } = props;

    // console.log(props)
    return (
        <div className='book-item'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button className='handle-btn' onClick={() => handleAddToCart(name)}>Add to Cart</button>

        </div>
    );
};

export default Book;