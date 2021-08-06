import React from 'react';
import './popup.css'
function Popup(props) {
    return (
    <>
        <div className="design"></div>
        <div className={props.cname}>
            <div className="popup_content">
                {props.children}
            </div>
        </div>
    </>
    )
}

export default Popup;