function Header() {
  return (
    <header className="d-flex justify-between	align-center">
      <div className="d-flex align-center	">
        <img src="/img/logo.svg"></img>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img src="/img/cart.svg"></img>
          <span>1205 грн.</span>
        </li>
        <li>
          <img src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
