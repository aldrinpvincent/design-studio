import React from "react";
import Link from "../../helpers/Link";

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="active" href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/buttons">
          <a>Buttons</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        width: 200px;
        flex-shrink: 0;
       
      }
      li a{
        text-decoration: none;
        padding: 10px;
        display: block;
      }
      ul {
        list-style: none;
        padding-left : 20px;
      }

      .active {
        background-color: #e6f7ff;
      }
    `}</style>
  </nav>
);

export default Menu;
