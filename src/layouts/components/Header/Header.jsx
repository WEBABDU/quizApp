/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Button } from "components";
import { data } from "layouts/data";
import { authActions } from "store/actions";
import { ReactComponent as HamburgerIcon } from "assets/images/icon-hamburger.svg";

import "./Header.css";
import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const { links } = data;

  const logout = () => {
    dispatch(authActions.logoutUserThunk(navigate));
  };

  useEffect(() => {
    if (isActive) {
      window.document.querySelector("body").style.overflow = "hidden";
    } else {
      window.document.querySelector("body").style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <header className="header">
      <div className="header__wrapper | container">
        <Link to="/" className="logo">
          QuizApp
        </Link>

        <nav className="nav">
          <ul
            role="list"
            className={isActive ? "nav__list active" : "nav__list"}
          >
            {links.map((item, index) => (
              <li
                className="nav__list-item"
                key={index}
                onClick={() => setIsActive(false)}
              >
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? "nav__list-link active" : "nav__list-link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <Button onClick={logout} innerText="Sign Out" variant="register" />
          </ul>
          <button
            className={isActive ? "hamburger-btn active" : "hamburger-btn"}
            onClick={() => setIsActive(!isActive)}
          >
            {/* <HamburgerIcon /> */}
          </button>
        </nav>
      </div>
    </header>
  );
};
