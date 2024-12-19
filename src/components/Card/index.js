import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unlicked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <h5>
                {props.title} 
                {/* Передали свойство с props и аргумента title в <Card /> */}
            </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Прайс:</span>
                    <b>{props.price} грн.</b>
                </div>
                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;
