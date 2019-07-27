import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Previewer = ({ button }) => {
  const { css, name } = button;
  const [styles, setStyles] = useState(css);
  const Wrapper = styled.section`${styles}}`;

  useEffect(() => {
    setStyles(css)
  }, [css]);

  return (
    <section>
      Preview
      <article className="preview">
        <Wrapper>
          {name && <button >{name}</button>}
        </Wrapper>
      </article>

      HTML
      <article className="html">
        {name && ` <button>${name}</button>`}
      </article>

      CSS
      <article className="css"><textarea onChange={(e) => { setStyles(e.target.value) }} rows="15" cols="50" value={styles}></textarea></article>

      <style jsx>{`
        article { 
           display: flex;
           align-items: center;
          justify-content: center;
        }
        section {
          border: 1px solid #ebedf0;
          border-radius: 2px;
          transition: all .2s;
          flex: 1;
          padding: 1rem;
          height  :100%;
          margin : 0 10px 0 20px; 
        }
        .preview{
           background-color: white;
            border: 1px solid bisque;
            margin-bottom : 20px;
            min-height : 10vh;   
        }
        .html {
            background-color: white;
            border: 1px solid bisque;
            margin-bottom : 20px;
            min-height : 10vh;   
        }
        .css{
            background-color: white;
            border: 1px solid bisque;
            min-height : 50vh; 
        }
        `}</style>

    </section>
  );
};

export default Previewer;
