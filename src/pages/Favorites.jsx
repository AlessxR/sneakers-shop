import Card from "../components/Card";
function Favorites( {items, onAddFavorite} ) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {Array.isArray(items) &&
          items
            .map((item) => (
              <Card
                key={item.title}
                favorited={true}
                onFavorite={onAddFavorite}
                {...item} // Взяли объекты с бек.
              />
            ))}
      </div>
    </div>
  );
}

export default Favorites;
