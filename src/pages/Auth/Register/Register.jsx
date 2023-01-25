import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Fields/Input/Input";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import { authActions } from "../../../store/actions/auth";

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
      <div className="row">
        <PageHeading text="Register" />
        <div className="register | flow">
          <div className="register__image">
            <img
              src={require("./../../../assets/images/screen.svg").default}
              alt=""
            />
          </div>
          <div className="form-container">
            <form action="#" className="form | flow">
              <Input
                type="text"
                placeholder="Type username"
                label="Username"
                inputProps={{ name: "username" }}
                onChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Type email"
                label="Email"
                inputProps={{ name: "email" }}
                onChange={handleChange}
              />
              <Input
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
