import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';

function Card({
  id,
  onFavorite,
  title,
  imageUrl,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added); // По умолчанию ставим false.
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price }); // передали объекты при каждом нажатии на плюс.
    setIsAdded(!isAdded); // Инверсия значения.
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#ffffff"
          foregroundColor="#65c8c1">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="155" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onFavorite}>
            <img
              onClick={onClickFavorite}
              src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unlicked.svg'}
              alt="unliked"
            />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="sneakers" />
          <h5>
            {title}
            {/* Передали свойство с props и аргумента title в <Card /> */}
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Прайс:</span>
              <b>{price} грн.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
