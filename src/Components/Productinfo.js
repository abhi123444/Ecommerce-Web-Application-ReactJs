import React, { useEffect, useState } from 'react';
import './productinfo.css'
import StarIcon from '@material-ui/icons/Star';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './stateProvider';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
function Productinfo({products}) {
    const [{trigger,basket}, dispatch] = useStateValue();
    console.log(products)
    const back_infor = () => {
        dispatch({
            type:'REMOVE_PRODUCTDATA'
        })
    }
    const hundleTrigger = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: products.id,
                name: products.name,
                image: products.img,
                price: products.price,
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
        <div className="productinfo_container">
            <div className="back_info">
               <button onClick={back_infor}> <ArrowBack/></button>
            </div>
            <div className="productinfo_content">
                <div className="productinfo_content_name"> 
                    <span>{products.name}</span>
                </div>
                <div className="productinfo_rating">
                    <StarIcon className="star_icon"/>
                    <StarIcon className="star_icon"/>
                    <StarIcon className="star_icon"/>
                    <StarIcon className="star_icon"/>
                    <StarIcon className="star_icon"/>
                    <div className="total_sales">(200)</div>
                </div>
                <div className="productinfo_price">
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                            <strong className="productinfo_promo_price">{value}</strong>
                            </>
                        )}
                        decimalScale={2}
                        value={products.price.promo}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                            <strong className="productinfo_original_price">{value}</strong>
                            </>
                        )}
                        decimalScale={2}
                        value={products.price.main}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                </div>
                
            </div>
           <div className="productinfo_img">
                <div></div>
                <img src={products.img}/>
            </div>
            <div className="productinfo_content">
                <div className="button_">
                    <Link to='/cart' className="decorationLinenone">
                        <button onClick={hundleTrigger} className="btn">Buy</button>
                    </Link>
                    <button onClick={hundleTrigger} className="btn"><ShoppingCartIcon /></button>
                </div>
                <div className="productinfo_content_heighlight">
                    <h3>Heighlight</h3>
                    <ul>
                      {
                          products.highlights.map((data , idx)=>(
                              <li key={idx}>{data.line}</li>
                          ))
                      }
                    </ul>
                </div>
                <div className="productinfo_content_specification">
                    <h3>Specification</h3>
                    <table cellSpacing="10"> 
                        <tbody>
                            <tr>
                                <th  className="pcs_head">General</th>
                            </tr> 
                            {
                                products.specification.map((data , idx)=>(
                                    <tr key={idx} className="pcs_row">
                                        <td valign = "top" className="pcs_title">{data.name}</td>
                                        <td valign = "top" className="pcs_info">{data.content}</td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </table>
                    <h3>Display</h3>
                    <table cellSpacing="10"> 
                        <tbody>
                            <tr>
                                <th  className="pcs_head">General</th>
                            </tr> 
                            {
                                products.display.map((data , idx)=>(
                                    <tr key={idx} className="pcs_row">
                                        <td valign = "top" className="pcs_title">{data.name}</td>
                                        <td valign = "top" className="pcs_info">{data.content}</td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </table>
                    <h3>Memory Storage</h3>
                    <table cellSpacing="10"> 
                        <tbody>
                            <tr>
                                <th  className="pcs_head">General</th>
                            </tr> 
                            {
                                products.memory_storage.map((data , idx)=>(
                                    <tr key={idx} className="pcs_row">
                                        <td valign = "top" className="pcs_title">{data.name}</td>
                                        <td valign = "top" className="pcs_info">{data.content}</td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Productinfo;