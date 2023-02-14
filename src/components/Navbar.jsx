import React from "react";
import "../Styles/navbar.css";
const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          {/* <span>
            <i className="fas fa-cart-plus"></i>
          </span> */}
          <span>Carts {size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


