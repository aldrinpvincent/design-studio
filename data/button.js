export const buttonsData = [
  {
    name: "Default",
    css: `
   button {
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    border-radius: 4px;
    color: #000150;
    background-color: #fff;
    border-color: #d9d9d9;
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
}
`
  },
  {
    name: "Dashed",
    css: `
   button {
    cursor: pointer;
    padding: 5px 16px;
    font-size: 14px;
    border-radius: 4px;
    color: #000150;
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    background-color: #fff;
    border-color: #3E3939;
    border-style: dashed;
}`
  },
  {
    name: "Round",
    css: `
   button {
    width: 45px;
    height: 45px;
    padding: 0;
    font-size: 14px;
    border-radius: 50%;
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    cursor : pointer;
}`
  },
  {
    name: "Short Jump",
    css: `
button:hover {
    transform: translate3d(0px, -2px, 0px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
    background: rgb(255, 45, 116);
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
    background: rgb(255, 71, 133);
}
`
  }
]
