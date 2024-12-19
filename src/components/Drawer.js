function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img className="cu-p" width={14} height={14} src="/img/btn-remove.png" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/sneakers/sneakers-1.jpeg" />

            <div
              style={{ backgroundImg: 'url(/img/sneakers/sneakers-1.jpeg)' }}
              className="cardItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 000 Euro</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.png" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center">
            <img className="mr-20" width={70} height={70} src="/img/sneakers/sneakers-1.jpeg" />

            <div
              style={{ backgroundImg: 'url(/img/sneakers/sneakers-1.jpeg)' }}
              className="cardItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 000 Euro</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.png" alt="remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>24 000 Евро.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1000 Евро.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ<img src="img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
