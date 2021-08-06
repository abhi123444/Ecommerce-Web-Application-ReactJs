import React from 'react';
import './productcart.css'
import StarIcon from '@material-ui/icons/Star';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './stateProvider';
function Productcart({product}) {
    const [{trigger,basket}, dispatch] = useStateValue();
    const removeCartitem = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: product.id,
        })
    }
    
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
                        value={30999}
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
                        value={28999}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                </div>
                <div className="content_button">
                    <a>SAVE FOR LATER</a>
                    <a onClick={removeCartitem}>REMOVE</a>
                </div>
            </div>
        </div>
    );
}

export default Productcart;