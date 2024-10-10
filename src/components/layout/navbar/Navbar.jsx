import React from "react";
import "./navbar.css";
import { CardWidget } from "../../common/cartWidget/CardWidget";

export const Navbar = () => {
  return (
    <>
      <div className="container_navbar">
        <img src="/public/LOGOOOOO.png" alt="logo" />

        <ul>
          <li>inicio</li>
          <li>hardware</li>
          <li>perifericos</li>
          <li>monitores</li>
        </ul>

        <CardWidget />
      </div>
    </>
  );
};
