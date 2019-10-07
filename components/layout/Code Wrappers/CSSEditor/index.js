import React, { useState } from 'react';

import copy from "copy-to-clipboard";
import Editor from "../../../editor";

const CSSEditor = ({ styles, setStyles, name, setShowHelp, setCopyLabel, showHelp, copyLabel }) => {
  function copyToClipBoard() {
    const copyStatus = copy(styles);
    if (copyStatus) {
      setCopyLabel("Copied..!");
      setShowHelp(false);
    }
  }
  return (
    <section>
      <p className="inline">CSS</p>
      {name && (
        <button className="copy-button" onClick={copyToClipBoard}>
          {copyLabel}
        </button>)
      }
      {showHelp && (
        <div
          className="tooltips"
          onClick={() => { setShowHelp(false); }}
        >
          <span> Edit below CSS to customize the styles</span>
        </div>)
      }
      <div className="editor">
        <Editor
          onChange={styles => {
            setStyles(styles);
            setTimeout(() => {
              setShowHelp(false)
            }, 3000);
          }}
          value={styles} />
      </div>
      {/* {<article className="css"><textarea onChange={(e) => { setStyles(e.target.value) }} value={styles}></textarea></article>} */}
      <style jsx>{`
.inline {
  display: inline;
}
                
.editor {
  margin:0 auto;
  width : 500px;
  }

.copy-button {
  float: right;
  margin-right: 13%;
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #fff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-bottom: 2px;
}

@media (max-width: 1400px) {
  .copy-button {
    margin-right: 0%;
  }
}

.copy-button:hover {
  color: #40a9ff;
  border-color: #40a9ff;
}
p {
  margin: 0 0 2px 0;
  font-size: 22px;
  color: #355681;
  font-family: "Orienta", sans-serif;
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
  left: 5%;
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
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serifbody fon;
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
}

export default CSSEditor;