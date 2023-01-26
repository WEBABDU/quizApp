import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Fields, PageHeading } from "components";
import { settingsActions } from "store/actions";

import { data } from "./data";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {categoryOptions, difficultyOptions} = data
  const [category, setCategory] = useState([categoryOptions[0]]);
  const [difficulty, setDifficaulty] = useState(difficultyOptions[0]);
  const [limit, setLimit] = useState(5);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handleClick = (event) => {
    const categories = category.map((category) => category.value);
    dispatch(settingsActions.setCategory(categories));
    dispatch(settingsActions.setDifficulty(difficulty.value));
    dispatch(settingsActions.setLimit(Number(limit)));
    navigate("/quiz");
  };

  return (
    <div className="container">
      <div className="home-wrapper">
        <PageHeading text="Home" />
        <div className="home">
          <div className="flow">
            <Fields.Select
              options={categoryOptions}
              onChange={setCategory}
              isMulti
              name="categories"
              placeholder="Categories"
              value={category}
              label="Primary category of each question (1 per question)"
            />
            <Fields.Select
              options={difficultyOptions}
              name="difficulty"
              value={difficulty}
              onChange={setDifficaulty}
              label="Easy, medium or hard"
              placeholder="Difficulty"
            />
            <Fields.Input
              type="number"
              placeholder="Limit"
              label="Number of questions to return"
              value={limit}
              onChange={handleLimitChange}
            />
            <Button
              variant="login"
              type="button"
              innerText="Genarate quiz"
              style={{ width: "100%", "--flow-spacer": "32px" }}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
