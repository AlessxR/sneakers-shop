function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" width={14} height={14} src="/img/btn-remove.png" alt="remove" /></h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src = "/img/sneakers/sneakers-1.jpeg" />

              <div style = {{backgroundImg: 'url(/img/sneakers/sneakers-1.jpeg)'}} className="cardItemImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                <b>12 000 Euro</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.png" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center">
              <img className="mr-20" width={70} height={70} src = "/img/sneakers/sneakers-1.jpeg" />

              <div style = {{backgroundImg: 'url(/img/sneakers/sneakers-1.jpeg)'}} className="cardItemImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                <b>12 000 Euro</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.png" alt="remove" />
            </div>
          </div>

         <div className="cartTotalBlock">
          <ul>
              <li>
                <span>
                  All: 
                </span>
                <div>

                </div>
                <b>
                  24 000 euro.
                </b>
              </li>
              <li>
                <span>
                  Nalog 5%:
                </span>
                <div>

                </div>
                <b>
                  1000 euro.
                </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ<img src="img/arrow.svg" alt="arrow"></img></button>
         </div>

        </div>
      </div>

      <header className="d-flex justify-between	align-center"> 
        <div className="d-flex align-center	">
          <img src="/img/logo.svg"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg"></img>
            <span>1205 евро.</span>
          </li>
          <li>
            <img src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="d-flex">
          <div className="card ">
            <div className="favorite">
              <img src="/img/heart-unlicked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="img/sneakers/sneakers-1.jpeg" alt="sneakers" />
            <h5>Мужские Кроссовки<br />Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 eu.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>

          <div className="card ">
            <img width={133} height={112} src="img/sneakers/sneakers-1.jpeg" alt="sneakers" />
            <h5>Мужские Кроссовки<br />Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 eu.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>

          <div className="card ">
            <img width={133} height={112} src="img/sneakers/sneakers-1.jpeg" alt="sneakers" />
            <h5>Мужские Кроссовки<br />Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 eu.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>

          <div className="card ">
            <img width={133} height={112} src="img/sneakers/sneakers-1.jpeg" alt="sneakers" />
            <h5>Мужские Кроссовки<br />Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 eu.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); // Default HTML + JS

}

export default App; // Чтобы файл был везде доступен в проекте, и его можно было импортировать. 
