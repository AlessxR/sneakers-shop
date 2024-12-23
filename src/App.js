import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  // var [count, setCount] = React.useState(5);

  // const plus = () => {
  //   setCount(++count);
  // };

  // const minus = () => {
  //   setCount(--count);
  // };

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]); // Корзина. 
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState(''); // Поиск
  const [cartOpened, setCartOpened] = React.useState(false); // Корзина закрыта.
  
  React.useEffect(() => {
    // fetch('https://67674af3560fbd14f18d663d.mockapi.io/Items').then(responsive => {
    //   return responsive.json(); // Возвращение в json формате. 
    // }).then(json => {
    //   setItems(json); // Установили items и рендер. 
    // }); // Получили массив, вытащили данные.

    axios.get('https://67674af3560fbd14f18d663d.mockapi.io/Items').then(res => {
      setItems(res.data); // Получили все кроссовки с сервера.
    });

    axios.get('https://67674af3560fbd14f18d663d.mockapi.io/cart').then(res => {
      setCartItems(res.data); // Отправка запроса на получение корзины.
    }); 

  }, []); 

  const onAddToCart = (obj) => {
    axios.post('https://67674af3560fbd14f18d663d.mockapi.io/cart', obj);// Отправка на MockAPI кроссовок, которые добавили в корзину.
    setCartItems(prev => [...prev, obj]); // Пользователю сразу выбиваем результат.
  };

  // Удаление с корзины элементов.
  const onRemoveItem = (id) => { 
    axios.delete(`https://67674af3560fbd14f18d663d.mockapi.io/cart/${id}`) // Отправка запроса на сервер для удаления элемента.
    setCartItems(prev => prev.filter(item => item.id !== id)); 
  };

  // const onAddFavorite = (obj) => {
  //   axios.post('https://67674af3560fbd14f18d663d.mockapi.io/cart', obj);// Отправка на MockAPI кроссовок, которые добавили в корзину.
  //   setCartItems(prev => [...prev, obj]); // Пользователю сразу выбиваем результат.
  // }; Мок даёт только 3 ресурса, облом =)

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* <center>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </center> */}

      {/* Отображение корзины */}
      {/* Если открыта выполняем действие, и наоборот */}
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />} 
      <Header onClickCart={ () => setCartOpened(true)} /> 

      <Routes>
        <Route 
        path="/test"
        element ={<div>Test info</div>}
        />
      </Routes>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            Array.isArray(items) && items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Card
                key={item.title}
                title={item.title} 
                price={item.price}
                imageUrl= {item.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus ={(obj) => onAddToCart(obj)} 
            />
          ))};
        </div>
      </div>
    </div>
  ); // Default HTML + JS
}

export default App; // Чтобы файл был везде доступен в проекте, и его можно было импортировать.
