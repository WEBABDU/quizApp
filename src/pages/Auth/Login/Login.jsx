import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

import { Input } from "../../../components/Fields/Input/Input";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import { authActions } from "../../../store/actions/auth";

import "./Login.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const signIn = (event) => {
    event.preventDefault();
    dispatch(authActions.loginUserThunk(formData, navigate));
  };

  return (
    <>
      <div className="login__wrapper">
        <div className="row">
          <PageHeading text="Login" />
          <div className="login | flow">
            <div className="login__image">
              <img
                src={require("./../../../assets/images/screen.svg").default}
                alt=""
              />
            </div>
            <div className="form-container">
              <form action="#" className="form | flow">
                <Input
                  type="email"
                  placeholder="Type email"
                  inputProps={{ name: "email" }}
                  onChange={handleChange}
                  label="Email"
                />
                <Input
                  type="password"
                  placeholder="Type password"
                  inputProps={{ name: "password" }}
                  onChange={handleChange}
                  label="Password"
                />
                <div className="form__btns">
                  <Button
                    innerText="Sign in"
                    variant="login"
                    onClick={signIn}
                    style={{ width: "100%" }}
                  />
                </div>
                  <span className="form__link"> 
                    Don't have a account? <Link to="/register">Sign up</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
