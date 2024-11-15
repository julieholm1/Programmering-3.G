

function setup(){
    //Variablen 'c' er en ny instans af klassen Clock, som får div'en #clock med i sin constroctor
    let c = new Clock( select('#clock') , 'pink' )
    c.start()
}