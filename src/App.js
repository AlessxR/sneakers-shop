import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]); // Корзина.
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); // Поиск
  const [cartOpened, setCartOpened] = React.useState(false); // Корзина закрыта.
  const [isLoading, setIsLoading] = React.useState(true); // Проверка на готовность

  React.useEffect(() => {

    async function fetchData() {
      const itemsResponce = await axios.get('https://67674af3560fbd14f18d663d.mockapi.io/Items');
  
      const cartResponce = await axios.get('https://67674af3560fbd14f18d663d.mockapi.io/cart');
  
      const favoriteResponce = await axios.get('https://676ac528863eaa5ac0df93ea.mockapi.io/favorites');

      setIsLoading(false); // Загрузка всего

      setCartItems(cartResponce.data); 
      setFavorites(favoriteResponce.data);
      setItems(itemsResponce.data); 
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    // Проверка наличия в корзине.
    if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
      // Если есть, увеличиваем количество.
      axios.delete(`https://67674af3560fbd14f18d663d.mockapi.io/cart/${obj.id}`)
      setCartItems((prev) => prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id)));
    } else {
      // Если нет, добавляем в корзину.
      axios.post('https://67674af3560fbd14f18d663d.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  // Удаление с корзины элементов.
  const onRemoveItem = (id) => {
    axios.delete(`https://67674af3560fbd14f18d663d.mockapi.io/cart/${id}`); // Отправка запроса на сервер для удаления элемента.
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        // Удаляем из избранного
        await axios.delete(`https://676ac528863eaa5ac0df93ea.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        // Добавляем в избранное
        const { data } = await axios.post('https://676ac528863eaa5ac0df93ea.mockapi.io/favorites', {
          title: obj.title,
          price: obj.price,
          imageUrl: obj.imageUrl,
        });
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

  return (
    <div className="wrapper clear">
      {/* Отображение корзины */}
      {/* Если открыта выполняем действие, и наоборот */}
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />

        <Route
          path="/favorites"
          element={<Favorites items={favorites} onAddFavorite={onAddFavorite} />}
        />
      </Routes>
    </div>
  ); // Default HTML + JS
}

export default App; // Чтобы файл был везде доступен в проекте, и его можно было импортировать.
