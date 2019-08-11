import React from "react";
import Link from "../../helpers/Link";

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link activeClassName="active" href="/buttons">
          <a>Buttons</a>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/loaders">
          <a>Loading Indicators</a>
        </Link>
      </li>
      <li>
        <Link activeClassName="active" href="/inputs">
          <a>Input Element</a>
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
        color : grey;
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
      }

      li a.active::after {
            content: '|';
            float : right;
      }
      ul {
        list-style: none;
        padding-left : 20px;
      }

      li a.active {
        background-color: #e6f7ff;
        color: #1890ff;
      }
    `}</style>
  </nav>
);

export default Menu;
