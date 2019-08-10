const Items = ({ children }) => {
  return (
    <section>
      <article>
        {children}
      </article>
      <style jsx>{`
        section {
          border: 1px solid #ebedf0;
          border-radius: 2px;
          flex: 1;
          padding: 1rem;
          margin-left : 10px; 
          box-sizing: border-box;
          box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
        }
        article{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
        }
      `}</style>
    </section>
  );
};

export default Items;
