import React from 'react';
const HTMLPreview = ({ html }) => {
    return (<>
        <p>HTML</p>
        {<article >
            {html && <code>{html}</code>}
        </article>}
        <style jsx>{`
code {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    max-width: 100%;
    overflow: scroll;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
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
  border: 1px solid #ebedf0;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 20px;
  min-height: 10vh;
}
      `}</style>
    </>);
}

export default HTMLPreview;