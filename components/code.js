const Snippet = ({ children }) => {
  return (
    <>
      <blockquote>
        <pre>
          <code>{children}</code>
        </pre>
      </blockquote>
      <style jsx>{`
        pre {
          font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          margin-bottom: 10px;
          overflow: auto;
          width: auto;
          padding: 5px;
          background-color: #eee;
          width: 650px!ie7;
          padding-bottom: 20px!ie7;
          max-height: 600px;
        }
      `}</style>
    </>
  );
};

export default Snippet;
