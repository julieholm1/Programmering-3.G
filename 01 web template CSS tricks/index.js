let currentPage = 3
let pages //array med alle elementer med class = page
let colors = ['red','orange','yellow','lightgreen','green','darkgreen','lightskyblue','blue','darkblue','purple','pink']

function setup(){
    console.log('P5.js er loaded')

    select('#page' + currentPage).addClass('visible')

    pages = selectAll('.page')
    //Pages er nu blevet til en liste med alle class = page ting
    //console.log(pages.length)

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
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')

}

function keyPressed(){
    console.log(key)    
    shiftPage(key)
}