import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { createMarkup } from "../../lib/createMarkup";
import HTMLPreview from "./Code Wrappers/html";
import CSSEditor from "./Code Wrappers/CSSEditor";

const Previewer = ({ item, type }) => {
  const { css, name, html } = item;
  const [styles, setStyles] = useState(css);
  const [showHelp, setShowHelp] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy");

  const Wrapper = styled.div`
    ${styles}
  `;

  useEffect(() => {
    if (name) {
      setShowHelp(true);
      setCopyLabel("Copy");
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
            <span dangerouslySetInnerHTML={createMarkup(html)} />
          ) : (
              "Select a component from left for customization"
            )}
        </Wrapper>
      </article>

      <HTMLPreview html={html} />
      <CSSEditor {...{ styles, setStyles, name, setShowHelp, setCopyLabel, showHelp, copyLabel }} />

      <style jsx>{`

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
  margin: 0 0 2px 0;
  font-size: 22px;
  color: #355681;
  font-family: "Orienta", sans-serif;
}
article {
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview {
  border: 1px solid #ebedf0;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 20px;
  min-height: 12vh;
  overflow: scroll;
}
     `}</style>
    </section>
  );
};

export default Previewer;
