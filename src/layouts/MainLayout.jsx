import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./components";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <Outlet />
        </div>
      </main>
      <footer className="footer clr-neutral-100">
        <p>
          created by{" "}
          <a className="clr-neutral-100" href="https://github.com/WEBABDU">
            WEBABDU
          </a>{" "}
          - devChallenges.io
        </p>
      </footer>
    </>
  );
};
