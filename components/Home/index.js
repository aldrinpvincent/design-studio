import React from "react";
import Link from "next/link";
import CssBox from "./cssBox";
const Home = () => {
  return (
    <section>
      <CssBox />
      <h2>
        <span className="word-start">A place to </span>
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
        viewBox="0 0 1400 68"
        enableBackground="new 0 0 1440 68"
      >
        <path
          d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8"
          fill="#F2f2fb"
          transform="translate(0-1977)"
        />
      </svg>
      <article />

      <style jsx>{`
        .word-start {
          animation-name: drop;
          animation-duration: 3s;
        }
        @keyframes drop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .wave {
          margin-bottom: 0;
          padding-bottom: 0;
          display: block;
          position: relative;
          top: 37vh;
          margin: -10px;
        }

        article {
          background-color: #f2f2fb;
          height: 34vh;
          position: relative;
          top: 37vh;
          margin: -10px;
        }
        section {
          background-image: radial-gradient(#d7d7d7 1px, transparent 1px),
            radial-gradient(#d7d7d7 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
          text-align: center;
          height: 90vh;
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
          font-family: Circular, -apple-system, system-ui, Roboto,
            "Helvetica Neue", sans-serif;
          font-size: 16px;
          font-stretch: 100%;
          position: relative;
          top: 20vh;
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
          top: 17vh;
        }
        p {
          color: #444;
          white-space: nowrap;
          font-size: 200%;
          font-weight: normal;
        }
        .words {
          display: inline;
        }
        .words span {
          opacity: 0;
          overflow: hidden;
          color: #6b969d;
          margin: 0 2px;
        }
        .first span {
          animation: rotateWordsFirst 18s linear infinite 3s;
        }
        .second span {
          animation: rotateWordsFirst 18s linear infinite 3s;
        }
        @media (max-width: 768px) {
          .words {
            display: block;
          }
          .first span,
          .second span {
            display: block;
            margin-top: -15px;
            margin-left: 0 !important;
          }
          .first span:nth-child(1) {
            margin-top: 10px;
            margin-left: 0 !important;
          }
        }

        @media (max-width: 1146px) {
          .first span,
          .second span {
            margin-left: -15px;
          }
          .first span:nth-child(1) {
            margin-left: 10px;
          }
          p + span {
            display: block;
          }
        }

        .words span:nth-child(2) {
          animation-delay: 6s;
          color: #6b889d;
        }
        .words span:nth-child(3) {
          animation-delay: 9s;
          color: #6b739d;
        }
        .words span:nth-child(4) {
          animation-delay: 12s;
          color: #7a6b9d;
        }
        .words span:nth-child(5) {
          animation-delay: 15s;
          color: #8d6b9d;
        }
        .words span:nth-child(6) {
          animation-delay: 18s;
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
            transform: rotate(0deg);
          }
          19% {
            opacity: 1;
            transform: rotate(98deg);
          }
          21% {
            opacity: 1;
            transform: rotate(86deg);
          }
          23% {
            opacity: 1;

            transform: translateY(85px) rotate(83deg);
          }
          25% {
            opacity: 0;
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
          }
          8% {
            opacity: 1;
          }
          19% {
            opacity: 1;
          }
          25% {
            opacity: 0;
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
