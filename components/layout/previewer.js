import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Editor from "../editor";

const Previewer = ({ item, type }) => {
  const { css, name } = item;
  const [styles, setStyles] = useState(css);
  const [showHelp, setShowHelp] = useState(false);
  const Wrapper = styled.div`
    ${styles}}
  `;

  useEffect(() => {
    if (name) {
      setShowHelp(true);
    }
  }, [name]);

  useEffect(() => {
    setStyles(css);
  }, [css]);

  return (
    <section>
      <p>Preview</p>
      <article className="preview">
        <Wrapper>
          {name ? (
            type === "button" ? (
              <button>{name}</button>
            ) : (
              <div />
            )
          ) : (
            "Select a component from left for customization"
          )}
        </Wrapper>
      </article>

      <p>HTML</p>
      <article className="html">
        {name && type === "button"
          ? `<button>${name}</button>`
          : name && `<div> </div>`}
      </article>

      <p className="inline">CSS</p>
      <div
        className={showHelp ? "tooltips" : "hide"}
        onClick={() => {
          setShowHelp(false);
        }}
      >
        <span>Please edit the below CSS to customize the styles</span>
      </div>
      {
        <div className="editor">
          <Editor
            onChange={styles => {
              setStyles(styles);
            }}
            value={styles}
          />
        </div>
      }
      {/* {<article className="css"><textarea onChange={(e) => { setStyles(e.target.value) }} value={styles}></textarea></article>} */}

      <style jsx>{`
        .hide {
          animation: fadeOut 1s;
          display: none !important;
        }
        .inline {
          display: inline;
        }
        section {
          border: 1px solid #ebedf0;
          box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          transition: all 0.2s;
          flex: 1;
          padding: 1rem;
          height: 100%;
          margin: 0 10px 0 20px;
        }
        p {
          margin: 0 0 0 0;
          font-size: 22px;
          color: #355681;
          font-family: "Orienta", sans-serif;
        }
        article {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .editor {
          margin: 0 auto;
          width: 500px;
        }
        .preview {
          border: 1px solid #ebedf0;
          box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
          border-radius: 2px;
          margin-bottom: 20px;
          min-height: 12vh;
          overflow: scroll;
        }
        .html {
          border: 1px solid #ebedf0;
          box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
          border-radius: 2px;
          margin-bottom: 20px;
          min-height: 10vh;
          overflow: scroll;
        }
        .css {
          background-color: white;
          border: 1px solid bisque;
          min-height: 45vh;
          overflow: scroll;
        }
        .css textarea {
          box-sizing: border-box; /* fit parent width */
          min-height: 48vh;
          width: 100%;
          margin: 2rem;
          overflow: scroll;
        }

        div.tooltips {
          position: relative;
          left: 20%;
          display: inline;
          top: -5px;
        }
        div.tooltips span {
          padding: 5px 7px;
          color: #ffffff;
          background: #dc912e;
          height: 32px;
          line-height: 32px;
          text-align: center;
          border-radius: 9px;
          box-shadow: 4px 4px 3px #c7c1c6;
          font-family: apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serifbody fon;
        }
        div.tooltips span:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 30%;
          margin-left: -8px;
          width: 0;
          height: 0;
          border-top: 10px solid #dc912e;
          border-right: 8px solid transparent;
          border-left: 8px solid transparent;
        }
      `}</style>
    </section>
  );
};

export default Previewer;
