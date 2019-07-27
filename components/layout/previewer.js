import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Preview = ({ data }) => {

  const { css } = data;
  const [cssa, setcss] = useState(data.css);

  useEffect(() => {
    setcss(css)
  }, [css]);


  const Thing = styled.div`${cssa}}`

  return (
    <section>
      Preview
      <article className="html">

        <Thing>
          <button className={data.name}>{data.name}</button>
        </Thing>


      </article>
      Styles
      <article className="css"><textarea onChange={(e) => { setcss(e.target.value) }} rows="15" cols="50" value={cssa}></textarea></article>

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
        .html {
            background-color: white;
            border: 1px solid bisque;
            margin-bottom : 20px;
            height : 20vh;   
        }
        .css{
            background-color: white;
            border: 1px solid bisque;
            height : 50vh; 
        }
        `}</style>

    </section>
  );
};

export default Preview;
