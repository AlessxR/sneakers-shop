import React from 'react';
import styles from './Card.module.scss';

function Card({onFavorite, title, imageUrl, price, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false); // По умолчанию ставим false.
    const [isFavorite, setIsFavorite] = React.useState(false);



    const onClickPlus = () => {
        onPlus({title, imageUrl, price}); // передали объекты при каждом нажатии на плюс.
        setIsAdded(!isAdded); // Инверсия значения.
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }


    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img onClick={onClickFavorite} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unlicked.svg"} alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <h5>
                {title} 
                {/* Передали свойство с props и аргумента title в <Card /> */}
            </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Прайс:</span>
                    <b>{price} грн.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    );
}

export default Card;
