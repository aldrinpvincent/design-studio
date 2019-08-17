const CssBox = () => {
  return (
    <div className="box">
      <p>AWESOME</p>
      <p>CSS</p>
      <style jsx>{`
        p {
          margin: 0;
          color: #444;
          text-align: left;
        }

        .box {
          margin: auto;
          font-size: 36px;
          border: 2px solid black;
          font-family: apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serifbody fon;
          padding: 3px 6px;
          width: 174px;
          animation-duration: 3s;
          animation-name: boxGrow;
          position: relative;
          top: 13vh;
        }

        @keyframes boxGrow {
          from {
            width: 103px;
          }
          to {
            width: 174px;
          }
        }
      `}</style>
    </div>
  );
};

export default CssBox;
