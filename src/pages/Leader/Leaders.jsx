import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageHeading, ScoreTable } from "components";
import { statisticsActions } from "store/actions";

import "./Leaders.css";

export const Leaders = () => {
  const leaders = useSelector((state) => state.statistics.leaders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsActions.getLeaderThunk());
  }, []);

  return (
    <div className="container">
      <div className="leader-wrapper">
        <PageHeading text="Leaders" />
        <div className="leaders">
          <ScoreTable data={leaders} />
        </div>
      </div>
    </div>
  );
};
