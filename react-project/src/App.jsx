/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Hamburger and French Fries",
  "Pizza",
  "Shrimp Stew"
];

function Main({ dishes }) {
  return (
  <ul>
    {dishes.map((dish) => (
      <li style={{ listStyleType: "none"}}>{dish}</li>
    ))}
  </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items}/>
    </div>
  );
}

export default App;
