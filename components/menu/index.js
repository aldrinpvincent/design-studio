import React from "react";
import Link from "../../helpers/Link";

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="active" href="/">
          <button>Home</button>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/buttons">
          <button>Buttons</button>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        flex-basis: 200px;
      }
      .active:after {
        content: " (current page)";
      }
      .li {
        text-decoration: none;
        padding: 10px;
        display: block;
      }
    `}</style>
  </nav>
);

export default Menu;
