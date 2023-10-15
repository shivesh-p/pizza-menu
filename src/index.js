import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    imgUrl: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    imgUrl: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    imgUrl: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    imgUrl: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    imgUrl: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    imgUrl: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App(params) {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      {" "}
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const isPizzaAvl = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Specialities</h2>
      {isPizzaAvl > 0 ? (
        <>
          <p>
            A wide variety of pizzas to chose from, all organic, all delicious
            and all of them make your taste buds go boom !
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaData={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <div>We are still working on our menu :)</div>
      )}
    </main>
  );
}
function Pizza({ pizzaData }) {
  //if (pizzaData.soldOut) return null;
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaData.imgUrl} alt={pizzaData.name} />
      <div>
        <h4>{pizzaData.name}</h4>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT :(" : pizzaData.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  //conditional render
  const currHour = new Date().getHours();
  const openHour = 10;
  const closingHour = 22;
  const isOpen = openHour <= currHour && currHour <= closingHour;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="orders">
          <p>
            We are open only till {closingHour}:00 ! Please come visit us then
            or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
