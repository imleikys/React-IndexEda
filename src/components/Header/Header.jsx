import React from 'react'
import {Link} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import searchIcon from '../../assets/img/search-icon.svg';
import cart from '../../assets/img/cart.svg';


function Header() {

  return (
    <header className="header container">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Index.Eda: Logotype" />
      </Link>
      <form className="header-search" action="#" >
        <input className="header-search__input" type="search" placeholder="Блюда" />
        <button className="header-search__btn">
          <img src={searchIcon} alt="IndexEda: Search"/>
        </button>
      </form>
      <div className="header-buttons">
        <Link to="/" className="header-buttons__login">Войти</Link>
        <Link to="/cart" className="header-buttons__cart">
          <img src={cart} alt="Index.Eda: Cart" />
          <span className="header-buttons__cart-counter">12</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
