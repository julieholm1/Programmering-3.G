//Lad os lave et spil, hvor man først får vidst to farver i en bestemt rækkefølge, hvorefter spilleren skal trykke på 
//de samme farver i en rigtige rækkrfølge

//Array med en rækkefølge
let colors = ['blue', 'green', 'green', 'green', 'blue', 'blue', 'green']

//Variabler i HTML
let header, button

//denne variabel bruges til at håndtere mqtt
let client 

//state variable til at syre logikken
let state = 'setup'

//variable der bestemmer hvilken farve der vises/skal trykkes på
let currentColor = 0

function setup() {
  header = select('#header')
  button = select('#startButton')

  button.mousePressed( () => showColors(0) )

  createCanvas(windowWidth, windowHeight)

  //vi kan bruge mqtt.connect fordi vi har inkluderet mqtt.js i HTML filen
  client = mqtt.connect('wss://mqtt.nextservices.dk')

  //on er en asynkron EVENT, som kaldes når vi får en besked fra mqtt serveren 
  client.on('connect', function(svar){
    console.log(svar, 'serveren er klar til mqtt kommunikation')
  })

  //nu vil vi gerne subscribe på et emne
  client.subscribe('state_machine') 

  //og så skal vi sætte den LISTENER op som skal modtage input fra MQTT
  client.on('message', function(emne, besked){
    //emnet kommer som en string 
    console.log(emne)
    //beskeden skal vi lige parse før vi kan læse den
    console.log(besked.toString())
    //det vi får fra m5'eren er i det her eksempel JSON format 
  })
}
//Rekursiv funktion der kaldes sig selv
function showColors( position ){
  //sæt state
  state = 'colors'
  //Først sætter vi currentColor
    currentColor = position
    console.log(colors[position])
    if(position < colors.length - 1){
      setTimeout( () => showColors(position + 1), 1000 )
    }
}

function draw(){
  clear()
  if(state == 'setup'){
    header.html('Husk farvernes rækkefølge')
  }
  if(state == 'colors'){
    header.html(`Husk farve: ${currentColor + 1}`)
    fill(colors[currentColor])
    noStroke()
    ellipse(width/2, height/2, 300)
  }
  if(state == 'gameover'){
  }
}