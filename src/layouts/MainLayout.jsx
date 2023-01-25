import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <Outlet />
        </div>
      </main>
      <footer className="footer">created by username - devChallenges.io</footer>
    </>
  );
};
