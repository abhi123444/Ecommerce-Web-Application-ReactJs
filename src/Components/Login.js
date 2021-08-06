import React from 'react';
import './login.css'
import {Link , useHistory} from 'react-router-dom'
import {auth , provider} from '../firebase'
import { useStateValue } from './stateProvider';
function Login() {
    const history = useHistory();
    const signIn = async() => {
        await auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => alert(error.message));
        
        history.replace('/')
    }
    return (
        <div className="login_container">
                <div >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykP0TNU7_jrGEi-HaVm5DWpYi5lcUwU1dyfCXeZQ5Hbmxs3vk7OT9za-32ilBP5hwGw4&usqp=CAU"/>
                </div>
                <div className="login_slogan" >
                    <p>Whatever You Wants..!</p>
                </div>
            <button onClick={signIn}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdd11HWoFKOaGvr-bFsPE78aupBUko0loNA&usqp=CAU" alt="" />
                Signin using Google
            </button>
        </div>
    );
}

export default Login;