import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css';

const Books = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const removeItem = () => {
        const reset = [];
        setCart(reset);
    }
    return (
        <div className='books-parent'>
            <div className='book-container'>
                {
                    products.map(product => <Book key={product.id} product={product}
                        handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            <div className='cart-container'>
                {
                    <Cart removeItem={removeItem} cart={cart}></Cart>
                }

            </div>
        </div>
    );
};

export default Books;