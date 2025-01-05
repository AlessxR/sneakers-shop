import React from 'react'
import { Link } from 'react-router-dom';
import {useCart} from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between	align-center">
      <Link to="/">
        <div className="d-flex align-center	">
          <img src="img/logo.svg" alt="logo"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="img/cart.svg" alt="cart"></img>
          <span>{totalPrice} грн.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="img/favorite.svg" alt="favorite" />
          </Link>
        </li>
      
        <li>
          <Link to="/orders">
            <img src="img/profile.svg" alt="user-cart" />
          </Link>
        </li>
      </ul>
    </header>
    
  );
}

export default Header;
