import React, { useState, useRef } from 'react';
import css from 'styled-jsx/css';
// import styles from './st.css'



// const button = css`button { color: ${`blue`}; }`

const a = `.cls { color: ${`blue`}; }`

const styles = css`${a}`


const Preview = ({ data }) => {

  // console.log('data :', data);

  const [cssa, setcss] = useState(() => {
    return `button {
            color: #fff;
              background-color: #007bff;
              border-color: #007bff;
border-radius : 10px;
          }
          button:hover {
            transform: scale(1.1);
          }`;
  });




  // const but = useRef(css`button { color: blue; }`);



  return (
    <section>
      Preview
      <article className="html"><button id="1" className="cls">button</button></article>
      Styles
      <article className="css"><textarea onChange={(e) => { setcss(e.target.value) }} rows="15" cols="50" defaultValue={cssa}></textarea></article>

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

      <style jsx>{styles}</style>

    </section>
  );
};

export default Preview;
