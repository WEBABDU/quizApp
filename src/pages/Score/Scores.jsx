import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageHeading, ScoreTable } from "components";
import { statisticsActions } from "store/actions";

import "./Scores.css";

export const Scores = () => {
  const user = useSelector((state) => state.auth.user);
  const statistics = useSelector((state) => state.statistics.scores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsActions.getStatsticsThunk(user.uid));
  }, []);

  return (
    <div className="container">
      <div className="score-wrapper">
        <PageHeading text="Scores" />
        <div className="scores">
          <ScoreTable data={statistics} />
        </div>
      </div>
    </div>
  );
};
