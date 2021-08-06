import React from 'react';
import './cart.css';
import Payment from './Payment';
import Productcart from './Productcart';
import {useStateValue} from './stateProvider'
import {getBasketTotal } from './reducer';
import {Link, useHistory} from 'react-router-dom'
import db from '../firebase'
function Cart() {
    const history = useHistory();
    const [{basket , user}, dispatch] = useStateValue();

    const placeorder = () => {
        const id = db.collection('users').doc(user?.uid).collection('orders').doc().id

        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(id)
        .set({
            basket: basket,
            amount: getBasketTotal(basket),
            created: Date.now()
        })

        dispatch({
            type: 'EMPTY_BASKET'
        })
    
        history.replace('/order')
     }
    return (
        <div className="cart_container">
            <div className="cart_left">
                <div className="cart_header">
                    <p>Product to Buy({basket.length} item)</p>
                </div> 
                <div>
                    {basket.map((product,idx) => (
                         <Productcart key={idx} product={product}/>
                    ))}
                </div>
                <div className="cart_button">
                    {(user) 
                        ? <button className="btn_cart" onClick={placeorder} >PLACE ORDER</button>
                        : <Link to="/login" className="decorationLinenone"><button className="btn_cart">PLACE ORDER</button></Link>
                    }
                </div>
            </div>
            <div className="cart_right"><Payment /></div>
        </div>
    );
}

export default Cart;