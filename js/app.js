import Imagen from "./img.js"

//Renderizar un objeto Imagen: src, height, width
let myDiv=document.getElementById("myApp")

let myImg=new Imagen("./../img/img.jpg",500,800)

myDiv.innerHTML=myImg.render()