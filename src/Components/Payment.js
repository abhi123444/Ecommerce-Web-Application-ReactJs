import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './payment.css'
import { getBasketDiscount, getBasketTotal } from './reducer';
import { useStateValue } from './stateProvider';
function Payment() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="payment_container">
            <div className="payment_container_title">
                <p>PRICE DETAILS</p>
            </div>
            <div className="payment_container_content">
                <div className="payment_container_content_">
                    <p>Price({basket.length} items)</p>
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                <p>{value} </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                        />
                </div>
                <div className="payment_container_content_">
                    <p>Discount</p>
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                <p>{value} </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketDiscount(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                        />
                </div>
            </div>
            <div className="payment_container_total_price">
                <p>Total Amount</p>
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                 <p>{value} </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                        />
            </div>
            <div className="payment_container_saving">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                <p>You will save {value} on this order</p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketDiscount(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                        />
            </div>
        </div>
    );
}

export default Payment;