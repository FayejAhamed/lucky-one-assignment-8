import React from 'react';
import './Book.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Book = (props) => {
    const { name, picture, price } = props.product;
    const { handleAddToCart } = props;

    // console.log(props)
    return (
        <div className='book-item'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button className='handle-btn' onClick={() => handleAddToCart(props.product)}>Add to Cart <AiOutlineShoppingCart /></button>

        </div>
    );
};

export default Book;