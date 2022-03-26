import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const { removeItem } = props;
    const { random } = props;
    return (
        <div className='cart'>

            <h3 className='cart-item'>Select Book</h3>
            {
                cart.map((item, index) =>
                    <div className='parent-user' key={index}>
                        <img className='user-img' src={item.picture} alt="" />
                        <h4 className='cart-item' >{item.name}</h4>
                    </div>
                )
            }
            <button className='user-btn' onClick={random} >Choose one</button>
            <br />
            <br />
            <button className='user-btn' onClick={removeItem}>Clear</button>


        </div>
    );
};

export default Cart;