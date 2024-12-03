function setup(){
    //Json objekt med styling parametre sendes som det andet argument
    let styles = {
        background: 'black',
        shape: 'circle'
    }

    //Variablen 'c' er en ny instans af klassen Clock, som får div'en #clock med i sin constroctor
    let c = new Clock( select('#clock') , styles )
    c.start()
}