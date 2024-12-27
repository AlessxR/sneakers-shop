
function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            onClick={onClose}
            className="cu-p"
            width={14}
            height={14}
            src="/img/btn-remove.png"
            alt="remove"
          />
        </h2>

        {/* Рендеринг если карточка пустая и не пустая. */}
        {items.length > 0 ? (
          <div>
            <div className="items">
              {
                items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.png"
                    alt="remove"
                  />
                </div>
              ))}
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="Empty cart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}

        {/* <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/sneakers/sneakers-1.jpeg" alt="Sneakers-1" />

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
            <img className="mr-20" width={70} height={70} src="/img/sneakers/sneakers-1.jpeg" alt="Sneakers-2"/>

            <div
              style={{ backgroundImg: 'url(/img/sneakers/sneakers-1.jpeg)' }}
              className="cardItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 000 Euro</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.png" alt="remove" />
          </div> */}
      </div>
    </div>
  );
}

export default Drawer;
