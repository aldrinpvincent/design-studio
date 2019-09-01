export const loadersData = [
  {
    name: "Spinner",
    html: `<div></div>`,
    css: `
div {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
  },
  {
    name: "Loading Bar",
    html: `<div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>`,
    css: `
.loading-bar {
  display: inline-block;
  width: 5px;
  height: 24px;
  border-radius: 4px;
  animation: loading 1s ease-in-out infinite;
}
.loading-bar:nth-child(1) {
  background-color: #3498db;
}
.loading-bar:nth-child(2) {
  background-color: #c0392b;
  animation-delay: 0.09s;
}
.loading-bar:nth-child(3) {
  background-color: #f1c40f;
  animation-delay: .18s;
}
.loading-bar:nth-child(4) {
  background-color: #27ae60;
  animation-delay: .27s;
}

@keyframes loading {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
}
`
  },
  {
    name: "Dot-loader",
    html: `<div class="dot-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`,
    css: `
.dot-loader {
  position: relative;
  width: 64px;
  height: 64px;
}
.dot-loader div {
  position: absolute;
  top: 27px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fa7d16;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.dot-loader div:nth-child(1) {
  left: 6px;
  animation: dot1 0.6s infinite;
}
.dot-loader div:nth-child(2) {
  left: 6px;
  animation: dot2 0.6s infinite;
}
.dot-loader div:nth-child(3) {
  left: 26px;
  animation: dot2 0.6s infinite;
}
.dot-loader div:nth-child(4) {
  left: 45px;
  animation: dot3 0.6s infinite;
}
@keyframes dot1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dot2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
@keyframes dot3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
    `
  }
]
