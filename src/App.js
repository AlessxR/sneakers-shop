import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]); // Корзина.
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); // Поиск
  const [cartOpened, setCartOpened] = React.useState(false); // Корзина закрыта.
  const [isLoading, setIsLoading] = React.useState(true); // Проверка на готовность

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponce, cartResponce, favoriteResponce] = await Promise.all([
          axios.get('https://67674af3560fbd14f18d663d.mockapi.io/Items'),
          axios.get('https://67674af3560fbd14f18d663d.mockapi.io/cart'),
          axios.get(
          'https://676ac528863eaa5ac0df93ea.mockapi.io/favorites'),
        ]);

        setIsLoading(false); // Загрузка всего

        setCartItems(cartResponce.data);
        setFavorites(favoriteResponce.data);
        setItems(itemsResponce.data);
      } catch (err) {
        alert(err.message);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      // Проверка наличия в корзине.
      if (findItem) {
        // Если товар уже есть, увеличиваем его количество.
        setCartItems((prev) =>
          prev.map((item) =>
            Number(item.parentId) === Number(obj.id)
              ? { ...item, count: item.count + 1 }
              : item
          )
        );
      } else {
        // Если товара нет, добавляем его в корзину с количеством 1.
        const newItem = { ...obj, count: 1 }; // Добавляем count в объект
        setCartItems((prev) => [...prev, newItem]);
        const { data } = await axios.post('https://67674af3560fbd14f18d663d.mockapi.io/cart', newItem);
        setCartItems((prev) =>
          prev.map((item) =>
            item.parentId === data.parentId
              ? { ...item, id: data.id }
              : item
          )
        );
      }
    } catch (err) {
      alert('Не удалось добавить в корзину');
    }
  };
  

  // Удаление с корзины элементов.
  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://67674af3560fbd14f18d663d.mockapi.io/cart/${id}`); // Отправка запроса на сервер для удаления элемента.
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (err) {
      alert('Не удалось удалить из корзины');
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      const serializableObj = {
        id: obj.id,
        title: obj.title,
        price: obj.price,
        imageUrl: obj.imageUrl,
      };

      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        // Удаляем из избранного
        await axios.delete(`https://676ac528863eaa5ac0df93ea.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        // Добавляем в избранное
        const { data } = await axios.post(
          'https://676ac528863eaa5ac0df93ea.mockapi.io/favorites',
          serializableObj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path=""
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="favorites" element={<Favorites />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  ); // Default HTML + JS
}

export default App; // Чтобы файл был везде доступен в проекте, и его можно было импортировать.
