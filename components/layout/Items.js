const Items = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          border: 1px solid #ebedf0;
          border-radius: 2px;
          flex: 1;
          padding: 1rem;
          margin-left : 10px; 
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default Items;
