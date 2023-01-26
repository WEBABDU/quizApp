import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Button, Fields, PageHeading } from "components";
import { authActions } from "store/actions";

import screen from "assets/images/screen.svg"

import "./Register.css";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const signUp = (event) => {
    event.preventDefault();
    dispatch(authActions.registerUserThunk(formData, navigate));
  };

  return (
    <div className="register__wrapper">
      <div>
        <PageHeading text="Register" />
        <div className="register | flow">
          <div className="register__image">
            <img
              src={screen}
              alt=""
            />
          </div>
          <div className="form-container">
            <form action="#" className="form | flow">
              <Fields.Input
                type="text"
                placeholder="Type username"
                label="Username"
                inputProps={{ name: "username" }}
                onChange={handleChange}
              />
              <Fields.Input
                type="email"
                placeholder="Type email"
                label="Email"
                inputProps={{ name: "email" }}
                onChange={handleChange}
              />
              <Fields.Input
                type="password"
                placeholder="Type password"
                label="Password"
                inputProps={{ name: "password" }}
                onChange={handleChange}
              />
              <div className="form__btns">
                <Button
                  innerText="Sign up"
                  variant="login"
                  type="submit"
                  onClick={signUp}
                  style={{ width: "100%" }}
                />
              </div>
              <span className="form__link">
                Already have an accout? <Link to="/login">Sign in</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
