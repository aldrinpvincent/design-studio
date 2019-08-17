import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Awesome CSS</h1>
      </Link>

      <style jsx>
        {`
          h1 {
            font-family: apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serifbody fon;
            color: #7c795d;
            font-size: 33px;
            font-weight: normal;
            line-height: 40px;
            margin: 13px 4px;
            cursor: pointer;
          }
        `}
      </style>
    </header>
  );
}

export default Header;
