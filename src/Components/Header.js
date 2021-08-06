import React, { useEffect, useState } from 'react';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './stateProvider';
import {Link} from 'react-router-dom'
import { auth } from '../firebase';
function Header() {
    const [{basket,user}, dispatch] = useStateValue();
    const hundleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    const homes = () => {
        dispatch({
            type:'REMOVE_PRODUCTDATA'
        })
    }
    return (
        <div className="navbar_container">
           <div className="navbar_header">
                <Link to="/"> 
                    <div className="navbar_logo" onClick={homes}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykP0TNU7_jrGEi-HaVm5DWpYi5lcUwU1dyfCXeZQ5Hbmxs3vk7OT9za-32ilBP5hwGw4&usqp=CAU"/>
                    </div>
                </Link>
               <div className="navbar_search">
                   <form className="navbar_search_form">
                       <div className="navbar_search_form_content">
                           <div className="form_content_input">
                               <input placeholder="Search for products, brands and more"></input>
                           </div>
                           <button><SearchIcon /></button>
                       </div>
                   </form>
               </div>
                <div className="navbar_list">
                    <Link to={!user && '/login'} className="decorationLinenone">
                        <div onClick={hundleAuth} className="header_option">
                            <span className="header_optionlineone"> hello,{user && user.displayName }</span>
                            <span className="header_optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to={user ? '/order': '/login'} className="decorationLinenone">
                        <div className="header_option">
                            <span className="header_optionlineone">Your</span>
                            <span className="header_optionlinetwo">Orders</span>
                        </div>
                    </Link>
                    <Link to={(basket.length != 0) && '/cart'} className="decorationLinenone">
                        <div className="header_optionBasket">
                            <ShoppingCartIcon />
                            <span className="header_optionLinetwo header_basketCount">{basket.length}</span>
                        </div>
                    </Link>
                </div>
           </div>
        </div>
    );
}

export default Header;