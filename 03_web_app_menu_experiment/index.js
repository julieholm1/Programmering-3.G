let currentPage = 1

let pages //array med alle elementer med class = page
let menuItems //Array med alle menupunkterne 

function setup(){
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')

    //menuItems skal reagere ved at skifte side (Tager hvert menuItem og kalder dem m)
    for( m of menuItems){
        m.mousePressed( function(e){
            //e.target er selve html div'en
            console.log(e.target.id)
            //slice er -1 henter det sidste tal(menu1, menu2, menu3, menu4) i en string
            let nr = e.target.id.slice(-1)
            //Nu kan vi kalde shiftpage, som skifter side
            shiftPage(nr)
        } )
    }
    
    //Shiftpage er funktionen der tager et tal og skrifter til en side
    shiftPage(currentPage)

    //Vent 2 sek og sæt så class = hidden på header, så menu bliver væk
    setTimeout(function(){
        select('header').addClass('hidden')
    }, 2000)
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowrRight"){
        num = currentPage + 1
    }
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }

    select("#page" + currentPage).removeClass('visible')
    select("#menu" + currentPage).removeClass('active')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
    select("#menu" + currentPage).addClass('active')
}

function keyPressed(){
    console.log(key)    
    shiftPage(key)
}