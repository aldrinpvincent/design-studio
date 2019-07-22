import React from "react";

const Preview = () => {
  return (
    <div className="right-half">
      <article>
        <h1>Right Half</h1>
        <p>
          If your knees aren't green by the end of the day, you ought to
          seriously re-examine your life.
        </p>
      </article>
      <style jsx>{`
        .right-half {
          background-color: #b6701e;
          flex: 1;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Preview;
