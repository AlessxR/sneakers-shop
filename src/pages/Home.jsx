import Card from '../components/Card';
function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddFavorite,
  onAddToCart,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = (items || []).filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={item?.id || index}
        onFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item?.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };
  


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
