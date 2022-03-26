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
    const randomName = () => {
        const randomNum = [Math.floor(Math.random() * cart.length)]
        /*     setCart(cart[randomNum]); */
        if (!cart.length) {
            alert('please select item')
        }
        else {
            alert('you have selected   ' + cart[randomNum].name)
        }
        console.log(cart)
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
                <h2 style={{ textAlign: 'center' }}>Select Your Books</h2>
                {
                    cart.map(product => <Cart key={product.id} product={product}></Cart>)


                }
                <div className='btn-container'>

                    <button className='user-btn' onClick={randomName} >Choose one</button>
                    <br />
                    <br />
                    <button className='user-btn' onClick={removeItem}>Clear</button>

                </div>
            </div>
        </div>
    );
};

export default Books;