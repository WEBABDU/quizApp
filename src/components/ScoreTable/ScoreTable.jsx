import React from "react";

import "./ScoreTable.css"

export const ScoreTable = ({ data }) => {
  return (
    <div className="scores__table">
      <div className="scores__table-head | row">
        <div className="username | col-lg-6 col-md-6">
          <span>Username</span>
        </div>
        <div className="count | col-lg-3 col-md-3">
          <span>Quiz count</span>
        </div>
        <div className="score | col-lg-3 col-md-3">
          <span>Score</span>
        </div>
      </div>
      <div className="scores__table-content | flow">
        {data?.map((element, index) => (
          <div className="scores__table-stat | row" key={index}>
            <div className="username | col-lg-6 col-md-6">
              {element.username}
            </div>
            <div className="count | col-lg-3 col-md-3">{element.count}</div>
            <div className="score | col-lg-3 col-md-3">{element.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
