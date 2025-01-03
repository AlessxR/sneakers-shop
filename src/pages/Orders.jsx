import Card from '../components/Card';
import React from 'react';
import axios from 'axios';
import { AppContext } from '../App';

function Orders() {
  const {onAddFavorite, onAddToCart} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://676ac528863eaa5ac0df93ea.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch(error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {Array.isArray([]) &&
            (isLoading ? [...Array(8)] : orders).map((item) => (
            <Card
              key={item?.id}
              loading={isLoading}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Orders;
