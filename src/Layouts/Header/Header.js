import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import "../../Css/aem-grid.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import search from '../Header/search.png';
// import user from '../Header/user.png';
// import bag from '../Header/shopping-bag.png';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { RiShoppingBag3Line } from "@react-icons/all-files/ri/RiShoppingBag3Line";
import LoginApp from "../../Components/Authenticate/SignIn/LoginApp";
import logo from "../Header/venia-logo.png";

const Header = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // console.log(response.data, "searchresponse");
  // const fetchProducts = async () => {
  //   const response = await axios.get(
  //     `https://fakestoreapi.com/products/${search}`
  //   );
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, [search]);

  const searchCategory = (e) => {
    // console.log(e, "onChange--E");
    setSearch(e.target.value);
    switch (e.target.value.toLowerCase()) {
      case "women":
        navigate("/women");
        break;
      case "men":
        navigate("/men");
        break;
      case "electronics":
        navigate("/electronics");
        break;
      case "jewellery":
        navigate("/jewellery");
        break;
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="header__categories">
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/women"}>Women</NavLink>
                </li>
                <li>
                  <NavLink to={"/men"}>Men</NavLink>
                </li>
                <li>
                  <NavLink to={"/electronics"}>Electronics</NavLink>
                </li>
                <li>
                  <NavLink to={"/jewellery"}>Jewellery</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__icons">
            <ul>
              <li>
                <NavLink to="#">
                  {/* Search */}
                  <input
                    className="header__Searchall"
                    value={search}
                    type="text"
                    placeholder="Search Here..!"
                    onChange={(e) => searchCategory(e)}
                  />
                  <span>
                    <FiSearch />
                  </span>
                </NavLink>
              </li>
              <li className="dropdown sign">
                <NavLink to="#" className="dropbtn">
                  <span>
                    <FiUser />
                  </span>{" "}
                  Sign in
                </NavLink>
                <div className="dropdown-content">
                  <div className="login">
                    <LoginApp />
                  </div>
                </div>
              </li>
              <li className="itemnumbers">
                <NavLink to="/cart">
                  <span className="cart__icon">
                    <RiShoppingBag3Line />
                  </span>{" "}
                  {props.countCartItems ? (
                    <span className="cart__count">{props.countCartItems}</span>
                  ) : (
                    ""
                  )}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
