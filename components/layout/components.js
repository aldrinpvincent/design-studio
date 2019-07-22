const Components = ({ children }) => {
  return (
    <section>
      <button>button</button>
      {children}
      <style jsx>{`
        section {
          background-color: #ff9e2c;
          flex: 1;
          padding: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Components;
