function Header(props) {
  return (
    <header className="d-flex justify-between	align-center">
      <div className="d-flex align-center	">
        <img src="/img/logo.svg" alt="logo"></img>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/img/cart.svg" alt="cart"></img>
          <span>1205 грн.</span>
        </li>
        <li>
          <img src="/img/user.svg" alt="user-cart" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
