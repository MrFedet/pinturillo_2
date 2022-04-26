//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");
const goma = document.querySelector("id16");
cont = 0

let initialX;
let initialY;

let lapiz_tamanio;
let color;
function getInfo(){
  if (document.getElementById("id1").checked == true){
    lapiz_tamanio = 10;
    cont = 0
  } else if (document.getElementById("id2").checked == true){
    lapiz_tamanio = 20;
    cont = 0
  } else if (document.getElementById("id3").checked == true){
    lapiz_tamanio = 35;
    cont = 0
  } else if (document.getElementById("id4").checked == true){
    lapiz_tamanio = 50;
    cont = 0
  } else if (document.getElementById("id5").checked == true){
    lapiz_tamanio = 65;
    cont = 0
  }

  if (document.getElementById("id6").checked == true){
    color= "#000"
    cont = 0
  }else if (document.getElementById("id7").checked == true){
    color = "#FB0000"
    cont = 0
  } else if (document.getElementById("id8").checked == true){
    color ="#FCF502"
    cont = 0
  }else if (document.getElementById("id9").checked == true){
    color ="#F700FB"
    cont = 0
  }else if (document.getElementById("id10").checked == true){
    color ="#7200FB"
    cont = 0
  }else if (document.getElementById("id11").checked == true){
    color ="#2E00FB"
    cont = 0
  }else if (document.getElementById("id12").checked == true){
    color ="#002AFB"
    cont = 0
  }else if (document.getElementById("id13").checked == true){
    color ="#00D5FB"
    cont = 0
  }else if (document.getElementById("id14").checked == true){
    color ="#00FB76"
    cont = 0
  }else if (document.getElementById("id15").checked == true){
    color ="#FB7E00"
    cont = 0
  }

  document.getElementById("id16").onclick = function(){
    cambiar_gomaa();
  }
  
  document.getElementById("boton").onclick = function(){
    downloadCanvasAsImage();
  }
}

function cambiar_gomaa(){
  if (cont == 0){
    cont += 1
    cambiar_goma()
  }else if (cont == 1){
   cont = cont - 1
   document.getElementById("id6").checked = true
   document.getElementById("id1").checked = true
  }
}



function cambiar_goma(){
  color = "#fff";
  lapiz_tamanio = 35;
  document.getElementById("id15").checked= false
  document.getElementById("id14").checked = false
  document.getElementById("id13").checked= false
  document.getElementById("id12").checked = false
  document.getElementById("id11").checked= false
  document.getElementById("id10").checked = false
  document.getElementById("id9").checked= false
  document.getElementById("id8").checked = false
  document.getElementById("id7").checked= false
  document.getElementById("id6").checked = false
  document.getElementById("id5").checked= false
  document.getElementById("id4").checked = false
  document.getElementById("id3").checked= false
  document.getElementById("id2").checked = false
  document.getElementById("id1").checked= false
}
const dibujar = (cursorX, cursorY) => {
  getInfo()
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = lapiz_tamanio;
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};

function downloadCanvasAsImage(){
  var can = document.getElementById("main-canvas");
  var ctx = can.getContext("2d")
  var imagen = can.toDataURL("image/png").replace("image/png", "image/octet-stream");
  window.location.href = imagen;

}    

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);
