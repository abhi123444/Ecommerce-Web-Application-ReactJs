import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Orderproduct from './Orderproduct';
import moment from 'moment'
import './order.css'
function Order({order}) {
    console.log(order)
    return (
        <div className="order_container">
            <div className="orders_id">
                <h3>order id: {order.id}</h3>
            </div>
            <div className="orders_date">
                <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            </div>
            <div className="order_content">
                {order.data.basket?.map((item,idx) => (
                    <Orderproduct
                        key={idx}
                        product={item}
                    />
                ))}
                 <CurrencyFormat
                        renderText={(value) => (
                            <>
                            <p id="order_total">Total : {value}</p>
                            </>
                        )}
                        decimalScale={2}
                        value={order ?order.data.amount :0}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    /> 
            </div>
        </div>
    );
}

export default Order; 