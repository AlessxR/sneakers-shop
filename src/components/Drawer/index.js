import React, { useEffect } from 'react';
import axios from 'axios';
import Info from '../Info';
import { useCart } from '../../hooks/useCart';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Drawer({ onClose, onRemove, items = [], opened }) {

  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // Убирание scroll.
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Удаление hidden
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  const groupedItems = items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.count += 1; // Увеличиваем количество
    } else {
      acc.push({ ...item, count: 1 }); // Добавляем новый товар с count = 1
    }
    return acc;
  }, []);

  const onClickOrder = async () => {
    try{
      setIsLoading(true);
      const {data} = await axios.post('https://676ac528863eaa5ac0df93ea.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) { // MockAPI =)
        const item = cartItems[i];
        await axios.delete("https://67674af3560fbd14f18d663d.mockapi.io/cart/" + item.id);
        await delay(1000);

      }
    } catch(err){
      alert("Не удалось создать заказ :(")
    }
    setIsLoading(false);
  }

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible :'' }`} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            onClick={onClose} // Закрытие корзины при нажатии.
            className="cu-p"
            width={14}
            height={14}
            src="img/btn-remove.png"
            alt="remove"
          />
        </h2>
        {/* Рендеринг если карточка пустая и не пустая. */}
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {groupedItems.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн. </b>
                    <span>Кол-во: {obj.count} </span>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-remove.png"
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
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} грн.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ<img src="img/arrow.svg" alt="arrow"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая."}
            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isOrderComplete ? "img/comple-order.svg" : "img/empty-cart.jpg"} 
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
