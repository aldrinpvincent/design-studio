const Preview = ({ children }) => {
  return (
    <section>
      <code>code</code>
      {children}
      <style jsx>{`
        section {
          background-color: #b6701e;
          flex: 1;
          padding: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Preview;
