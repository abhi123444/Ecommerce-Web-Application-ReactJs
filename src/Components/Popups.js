import React, { useEffect, useState } from 'react';
import Popup from './Popup'
import './popups.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';
function Popups(props) {
    const [{trigger,basket}, dispatch] = useStateValue();
    return (
        (trigger) ?
        <div className="popuplist_container">
            <Popup className ="infopopup" cname = "popup_main">
               <p className="popup_content">Name:{basket[basket.length-1].name}</p>
               <CurrencyFormat
                    renderText={(value) => (
                        <>
                        <strong className="popup_price">Total :{value}</strong>
                        </>
                    )}
                    decimalScale={2}
                    value={basket[basket.length-1].price.promo}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <p className="popup_content">Successfuly added to your cart...!</p>
            </Popup>
        </div>:<div></div>
    );
}

export default Popups;