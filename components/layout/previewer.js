const Preview = ({ html, css1 }) => {

  const css = `
            color: #1d9af2;
            background-color: #292d3e;
            border: 1px solid #1d9af2;
            border-radius: 4px;
            padding: 0 15px;
            cursor: pointer;
            height: 32px;
            font-size: 14px;
            transition: all 0.2s ease-in-out;`

  return (
    <section>
      Preview
      <article className="html"><button>button</button></article>
      <article className="css"><textarea rows="15" cols="50">{css}</textarea></article>
      <style jsx>{`

        article { 
           display: flex;
           align-items: center;
          justify-content: center;
        }
        section {
          background-color: aqua;
          flex: 1;
          padding: 1rem;
          height  :100%;
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
        button {
            ${css}
          }
          button:hover {
            transform: scale(1.1);
          }
      `}</style>
    </section>
  );
};

export default Preview;
