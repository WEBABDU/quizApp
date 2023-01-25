/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { authActions } from "../../store/actions/auth";
import { data } from "./../data";

import "./Header.css";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { links } = data;

  const logout = () => {
    dispatch(authActions.logoutUserThunk(navigate));
  };

  return (
    <header className="header">
      <div className="header__wrapper | container">
        <Link to="/" className="logo">
          QuizApp
        </Link>
        <nav className="nav">
          <ul role="list" className="nav__list">
            {links.map((item, index) => (
              <li className="nav__list-item" key={index}>
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
          </ul>
          <Button onClick={logout} innerText="Sign Out" variant="register" />
        </nav>
      </div>
    </header>
  );
};
