export const inputsData = [
  {
    name: "Default",
    html: ` <input type="text" placeholder="Enter data...">`,
    css: `
input[type=text], select {
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}`
  },
  {
    name: "label-up",
    html: ` <div class="input-wrapper">
<input class="label-up" type="text" placeholder="">
<label>Your Name</label>
<span class="focus-border"></span>
</div>
`,
    css: `

.input-wrapper {
     margin: 40px 3%;
     position: relative;
}
 input[type="text"] {
     font-size:20px;
     width: 100%;
}
 .label-up{
     border: 0;
     padding: 4px 0;
     border-bottom: 1px solid #ccc;
     background-color: transparent;
}
 .label-up ~ .focus-border{
     position: absolute;
     bottom: 0;
     left: 0;
     width: 0;
     height: 2px;
     background-color: #4caf50;
     transition: 0.4s;
}
 .label-up:focus ~ .focus-border, .has-content.label-up ~ .focus-border{
    width: 100%;
    transition: 0.4s;
}
 .label-up ~ label{
    position: absolute;
     left: 0;
     width: 100%;
     top: 9px;
     color: #aaa;
     transition: 0.3s;
     z-index: -1;
     letter-spacing: 0.5px;
}
 .label-up:focus ~ label, .has-content.label-up ~ label{
    top: -16px;
     font-size: 16px;
     color: #4caf50;
     transition: 0.3s;
}

 input:focus {
     outline: none;
}

    
    `
  }
]
