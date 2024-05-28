let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2
let velocidadex = 6
let velocidadey = -6

//variáveis raquete
let xRaquete = 5
let yRaquete = 150
let larguraraquete = 10
let alturaraquete = 90
let velocidadeyraq= 10

//variáveis oponente
let xRaqueteopo= 585
let yRaqueteopo= 150
let larguraraqueteopo= 10
let alturaraqueteopo= 90
let velocidaderaqueteopo

let colidiu= false

//placar do jogo
let meuspontos = 0
let pontosopo = 0

//sons
let raquetada
let ponto
let trilha

function preload(){
  trilha=loadSound("trilha.mp3")
  ponto=loadSound("ponto.mp3")
  raquetada=loadSound("raquetada.mp3")
}
function setup() {
createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostrabolinha()
  movimentabolinha()
  verificaborda()
  mostraraquete() 
  movimentaraquete()
  //colisaominharaquete()
  colisaobiblioteca()
  mostraraqopo()
  movimentaraqueteopo()
  colisaobibliotecaopo()
  incluiplacar()
  marcaponto()
 }   
function mostrabolinha(){
  circle(xBolinha,yBolinha,diametro)
}
function movimentabolinha(){
  xBolinha += velocidadex
  yBolinha += velocidadey
}
function verificaborda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
 velocidadex *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadey *= -1
  }
}
function mostraraquete(){
 rect(xRaquete, yRaquete, larguraraquete, alturaraquete)
}
function movimentaraquete(){
 if (keyIsDown(UP_ARROW)){
   yRaquete -= 10
 }
  if (keyIsDown(DOWN_ARROW)){
   yRaquete += 10
  }
}
function colisaoraquete(){
 if (xBolinha - raio < xRaquete + larguraraquete && yBolinha - raio < yRaquete +alturaraquete && yBolinha - raio < yRaquete + alturaraquete && yBolinha + raio > yRaquete){
   velocidadex*= -1
   raquetada.play()
  }
}
function colisaobiblioteca(){
colidiu = 
  collideRectCircle(xRaquete,yRaquete,larguraraquete,alturaraquete,xBolinha,yBolinha,raio) 
  if (colidiu){
  velocidadex *= -1
    raquetada.play()
}
}
function mostraraqopo(){ 
rect(xRaqueteopo,yRaqueteopo,larguraraqueteopo,alturaraqueteopo)
}
function movimentaraqueteopo(){
  if(keyIsDown(87)){
  yRaqueteopo -= 10
}
  if(keyIsDown(83)){
  yRaqueteopo += 10
} 
 }

function colisaobibliotecaopo(){
colidiu = 
  collideRectCircle(xRaqueteopo,yRaqueteopo,larguraraqueteopo,alturaraqueteopo,xBolinha,yBolinha,raio)
  if (colidiu){
  velocidadex *= -1
    raquetada.play()
}
 }
  function incluiplacar(){
stroke(255)
textAlign(CENTER)
textSize(16)
fill(color(106,90,205))
rect(150,10,40,20)
fill(225)
text(meuspontos,170,26)
fill(color(106,90,205))
rect(450,10,40,20)
fill(225)
text(pontosopo,470,26)
 }
function marcaponto(){
  if(xBolinha>590){
    meuspontos += 1
    ponto.play()
    
  }
    if(xBolinha<10){
      pontosopo+= 1
      ponto.play()
}
}

