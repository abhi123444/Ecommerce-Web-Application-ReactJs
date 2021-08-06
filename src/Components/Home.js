import React from 'react';
import api from './api'
import Shopcard from './Productcard'
import Productinfo from './Productinfo'
import { useStateValue } from './stateProvider';
import '../App.css'

function Home(props) {
    const [{items}, dispatch] = useStateValue();
    return (
        <div className="app_container">
        <div className="app_container_left">
          {api.map((item,idx) => (
             <Shopcard key={idx} item={item} />
          ))}
        </div>
        { (items.length === 0)
            ? ""
            : <div className={"app_container_right"}>
                <Productinfo key={items.id} products={items}/>
              </div>
        }
      </div>
    );
}

export default Home;