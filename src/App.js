import { useState ,useEffect } from 'react';
import './App.css';
import Carts from './components/Carts';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, data) => {
    const keyd = cart.indexOf(item);
    const arr = cart;
    arr[keyd].amount += data;

    if (arr[keyd].amount === 0) arr[keyd].amount = 1;
    setCart([...arr]);
  };

  return (
    <>

      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Main handleClick={handleClick} />
      ) : (
        <Carts cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
};

export default App;