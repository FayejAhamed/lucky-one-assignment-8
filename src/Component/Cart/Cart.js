import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { picture, name } = props.product;
    const { removeItem } = props;
    const { random } = props;
    return (
        <div className='cartt'>




            <div className='parent-user' >
                <img className='user-img' src={picture} alt="" />
                <h4 className='cart-item' >{name}</h4>
            </div>
            {/* {
                
                    <div className='parent-user' key={index}>
                        <img className='user-img' src={item.picture} alt="" />
                        <h4 className='cart-item' >{item.name}</h4>
                    </div>
                )
            } */}



        </div>
    );
};

export default Cart;