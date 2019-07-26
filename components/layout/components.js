const Components = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
             border: 1px solid #ebedf0;
    border-radius: 2px;
    transition: all .2s;
          flex: 1;
          padding: 1rem;
           margin-left : 10px; 
        }
      `}</style>
    </section>
  );
};

export default Components;
