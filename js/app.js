import Button from "./button.js"

let myDiv=document.getElementById("myApp")

let myButton=new Button("Presiona acá!")

myDiv.innerHTML=myButton.render()