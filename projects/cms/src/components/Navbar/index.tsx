import React from "react";
import Link from "next/link";

import { Header, Nav } from "./styles";

const Navbar = () => {
  return (
    <Header>
      <Link href="/">
        <a className="nav-item">
          <img src="/static/assets/spacex-logo.png" alt="SpaceX" />
        </a>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link href="/launches">
              <a>Launches</a>
            </Link>
          </li>
          <li>
            <Link href="/rockets">
              <a className="nav-item">Rockets</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="nav-item">About</a>
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
