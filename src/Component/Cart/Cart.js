import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const { cart } = props
    // cart.map(item => console.log(item))
    // console.log(name)
    return (
        <div className='cart'>

            <h3 className='cart-item'>Select Book</h3>
            {
                cart.map(item => <h4 className='cart-item' key={item.id}>{item}</h4>)
            }


        </div>
    );
};

export default Cart;