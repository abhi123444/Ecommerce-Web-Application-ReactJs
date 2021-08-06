import React, { useEffect, useState } from 'react';
import './orders.css'
import Order from './Order'
import { useStateValue } from "./stateProvider";
import db from '../firebase'

function Orders() {
    const [{ user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      if(user) {
          db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))  
          ))
      } else {
          setOrders([])
      }
  
    }, [user])
    return (
        <div className="orders_container">
            <div className="orders_title">
                <h3>Orders</h3>
            </div>
            <div>
            {orders?.map((order,idx) => (
                    <Order key={idx} order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;