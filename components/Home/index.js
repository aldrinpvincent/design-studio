import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <section>
      <h2>
        <p>CSS Snippets</p>
        <span>A place to </span>
        <div className="words first">
          <span>share</span>
          <span>make</span>
          <span>build</span>
          <span>enjoy</span>
          <span>create</span>
          <span>invent</span>
        </div>
        <div className="words second">
          <span>code</span>
          <span>wonder</span>
          <span>design</span>
          <span>colors</span>
          <span>happiness</span>
          <span>imagination</span>
          <span>ideas</span>
        </div>
      </h2>

      <Link href="/buttons">
        <button>
          <span>See all components </span>
        </button>
      </Link>

      <style jsx>{`
        section {
          background-image: radial-gradient(#d7d7d7 1px, transparent 1px),
            radial-gradient(#d7d7d7 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
          text-align: center;
          height: 100vh;
        }

        button {
          cursor: pointer;
          transform: translate3d(0px, 0px, 0px);
          font-size: 14px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          border-radius: 42px;
          overflow: hidden;
          padding: 12px 20px;
          transition: all 150ms ease-out 0s;
          background-clip: border-box;
          background-color: rgb(255, 90, 95);
          inline;
          font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
          font-size: 16px;
          font-stretch: 100%;
          position: relative;
          top: 25vh;
        }
        button:hover {
          transform: translate3d(0px, -2px, 0px);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
         background-clip: border-box;
          background-color: rgb(255, 45, 116);
        }

        h2 {
          font-family: apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serifbody fon;
          position: relative;
          top: 20vh;
        }
        p {
          color: #444;
          white-space: nowrap;
          font-size: 200%;
          font-weight: normal;
        }
        .words {
          display: inline;
          text-indent: -10px;
        }
        .words span {
          opacity: 0;
          overflow: hidden;
          color: #6b969d;
          margin: 0 2px;
        }
        .first span {
          animation: rotateWordsFirst 18s linear infinite 0s;
        }
        .second span {
          animation: rotateWord 18s linear infinite 0s;
        }
        .words span:nth-child(2) {
          animation-delay: 3s;
          color: #6b889d;
        }
        .words span:nth-child(3) {
          animation-delay: 6s;
          color: #6b739d;
        }
        .words span:nth-child(4) {
          animation-delay: 9s;
          color: #7a6b9d;
        }
        .words span:nth-child(5) {
          animation-delay: 12s;
          color: #8d6b9d;
        }
        .words span:nth-child(6) {
          animation-delay: 15s;
          color: #9b6b9d;
        }

        @keyframes rotateWord {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          17% {
            opacity: 1;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          19% {
            opacity: 1;
            -webkit-transform: rotate(98deg);
            transform: rotate(98deg);
          }
          21% {
            opacity: 1;
            -webkit-transform: rotate(86deg);
            transform: rotate(86deg);
          }
          23% {
            opacity: 1;
            -webkit-transform: translateY(85px) rotate(83deg);
            transform: translateY(85px) rotate(83deg);
          }
          25% {
            opacity: 0;
            -webkit-transform: translateY(170px) rotate(80deg);
            transform: translateY(170px) rotate(80deg);
          }
          80% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes rotateWordsFirst {
          0% {
            opacity: 1;
            animation-timing-function: ease-in;
            height: 0px;
          }
          8% {
            opacity: 1;
            height: 60px;
          }
          19% {
            opacity: 1;
            height: 60px;
          }
          25% {
            opacity: 0;
            height: 60px;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
