import React, { useState } from "react";
import './productcard.css';
import StarIcon from '@material-ui/icons/Star';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './stateProvider';
import CurrencyFormat from 'react-currency-format';
import {Link} from 'react-router-dom';
function Productcard({item}) {
    const [product,setProduct] = useState(item);
    const [{trigger,basket}, dispatch] = useStateValue();
    const hundleMore = () =>{
        dispatch({
            type:'SET_PRODUCTDATA',
            items: product,
        })
    }
    const hundleTrigger = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: product.id,
                name: product.name,
                image: product.img,
                price: product.price,
            },
        })
        dispatch({
            type: 'SET_TRIGGER',
            trigger:true,
        })
        setTimeout(()=> {
            dispatch({
                type: 'SET_TRIGGER',
                trigger:false,
             })
        },5000)
    }
  return (
    <> 
        <div className="shopcard_container">
            <div className="shopcard">
                <div className="card_img" onClick={hundleMore}>
                    
                    <img src={product.img}/>
                </div>
                <div className="card_containt">
                    <h3 className="card_name">
                        <a onClick={hundleMore}>{product.name}</a>
                    </h3>
                    <div className="card_category">
                        <i>{product.category}</i>
                    </div>
                    <div className="card_footer">
                        <div className="card_footer_containt">
                            <div className="price">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                            <strong className="promo_price">{value}</strong>
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
                                            <strong className="original_price">{value}</strong>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={product.price.main}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                            </div>
                            <div className="rating">
                                <StarIcon className="star_icon"/>
                                <StarIcon className="star_icon"/>
                                <StarIcon className="star_icon"/>
                                <StarIcon className="star_icon"/>
                                <StarIcon className="star_icon"/>
                                <div className="total_sales">(200)</div>
                            </div>
                        </div>
                        <div className="card_footer_button">
                            <button className="button_buy"  onClick={hundleMore}>more</button>
                            <button className="button_cart" onClick={hundleTrigger}><ShoppingCartIcon /></button>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>    
    </>
  );
}
export default Productcard;
