import React from 'react';
import CurrencyFormat from 'react-currency-format';
function Orderproduct({product}) {
    return (
        <div className="productcart_container">
        <div className="productcart_container_img">
            <img src={product.image} alt/>
        </div>
        <div className="productcart_container_content">
            <div className="content_name">
                <p>{product.name}</p>
            </div>
            <div className="content_price">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                        <strong id="_1">{value}</strong>
                        </>
                    )}
                    decimalScale={2}
                    value={product.price.promo}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                        <strong id="_2">{value}</strong>
                        </>
                    )}
                    decimalScale={2}
                    value={product.price.main}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
            </div>
        </div>
    </div>
    );
}

export default Orderproduct;