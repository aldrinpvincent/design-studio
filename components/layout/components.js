const Components = ({ children }) => {
  return (
    <section>
      <button>button</button>
      {children}
      <style jsx>{`
        section {
          background-color: #F9F0F0;
          flex: 1;
          padding: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Components;
