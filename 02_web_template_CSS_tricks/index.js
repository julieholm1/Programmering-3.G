let currentPage = 1
let menuNumber = 1

let pages //array med alle elementer med class = page
let menuItems //Array med alle menupunkterne 
let colors = ['red','orange','yellow','lightgreen','green','darkgreen','lightskyblue','blue','darkblue','purple','pink']

function setup(){
    console.log('P5.js er loaded')

    select('#page' + currentPage).addClass('visible')
    select('#menu' + menuNumber).addClass('active')

    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')

    //Tager 1 menuItems af gange og kalder dem m
    for( m of menuItems){
        m.mousePressed( function(e){
            //e.target er selve html div'en
            console.log(e.target.id)
            //slice er -1 henter det sidste tal(menu1, menu2, menu3, menu4) i en string
            let nr = e.target.id.slice(-1)
            shiftPage(nr)
        } )
    }

    //Pages er nu blevet til en liste med alle class = page ting
    console.log(pages.length)

    //Lav en masse div'er vi kommer ind i page3
    for(c of colors){
        //console.log(c)
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
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

    //Skrifter mellem de forskellige sider
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')

    //Skifter mellem de forskellige menuer
    select("#menu" + menuNumber).removeClass('active')
    menuNumber = num
    select("#menu" + menuNumber).addClass('active')

}

function keyPressed(){
    console.log(key)    
    shiftPage(key)
}