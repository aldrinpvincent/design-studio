import React from "react";

const Snippets = () => (
  <div className="left-half">
    <article>
      <h1>Left Half</h1>
      <p>
        Weekends don't count unless you spend them doing something completely
        pointless.
      </p>
    </article>
    <style jsx>{`
      .left-half {
        background-color: #ff9e2c;
        flex: 1;
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default Snippets;
