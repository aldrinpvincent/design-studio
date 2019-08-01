import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Editor from '../editor';

const Previewer = ({ button }) => {
  const { css, name } = button;
  const [styles, setStyles] = useState(css);
  const Wrapper = styled.div`${styles}}`;

  useEffect(() => {
    setStyles(css)
  }, [css]);

  return (
    <section>
      <p>
        Preview
      </p>
      <article className="preview">
        <Wrapper>
          {name && <button >{name}</button>}
        </Wrapper>
      </article>

      <p>
        HTML
      </p>
      <article className="html">
        {name && ` <button>${name}</button>`}
      </article>

      <p>
        CSS
      </p>
      {<div className="editor">
        <Editor onChange={(styles) => { setStyles(styles) }} value={styles} />
      </div>}
      {/* {<article className="css"><textarea onChange={(e) => { setStyles(e.target.value) }} value={styles}></textarea></article>} */}

      <style jsx>{`
        section {
          border: 1px solid #ebedf0;
          box-shadow: 0 0 5px 2px rgba(0,0,0,.1); 
          border-radius: 2px;
          transition: all .2s;
          flex: 1;
          padding: 1rem;
          height  :100%;
          margin : 0 10px 0 20px;
        }
        p{
          margin: 5px 0;
          font-size: 22px;
          color: #355681;
          font-family: 'Orienta', sans-serif;
        }
         article { 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .editor{
          margin: 0 auto;
          width : 500px;
        }
        .preview{
          border: 1px solid #ebedf0;
          box-shadow: 0 0 5px 2px rgba(0,0,0,.05); 
          border-radius: 2px;
          margin-bottom : 20px;
          min-height : 10vh;   
        }
        .html {
          border: 1px solid #ebedf0;
          box-shadow: 0 0 5px 2px rgba(0,0,0,.05); 
          border-radius: 2px;
          margin-bottom : 20px;
          min-height : 10vh;   
        }
        .css{
          background-color: white;
          border: 1px solid bisque;
          min-height : 50vh; 
        }
        .css textarea{
          box-sizing: border-box; /* fit parent width */
          min-height : 48vh; 
          width: 100%;
          margin : 2rem;
        }
        `}</style>

    </section>
  );
};

export default Previewer;
