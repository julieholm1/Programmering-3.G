console.log('Clock is here')

//Når en classes objekter kan opføre sig forskelligt afhængigt af arugemtnerne i constructoren
//kaldes det POLYMORFI

class Clock {
    //Constructoren er classens "setup" funktion, som kaldes når nye objekter fra classen oprettes.
    constructor(div, style){
        this.div = div
        this.style = style

        //div's for hours, minutes, seconds
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)

        //Interval til at sætte tiden ind
        this.interval

        //Styles
        this.div.style('front-size', '3rem')
        this.div.style('width', '16rem')
        this.div.style('height', '5rem')
        this.div.style('border', '4px dotted gray')
        this.div.style('display', 'grid')
        this.div.style('place-items', 'center')
        this.div.style('padding', '1rem')
        this.div.style('border-radius', '2rem')

        //reager på argumentet styele fra constructoren
        switch(this.style.shape){
            case 'circle':
                this.div.style('height', '16rem')
                this.div.style('border-radius', '50%')
                break
        }

        switch(this.style.background){
            case 'pink': 
                this.div.style('background', 'hotpink')
                break
            case 'black': 
                this.div.style('background', 'black')
                this.div.style('color', 'white')
                break
        }


    }

    start(){
        this.interval = setInterval( ()=>{
            //Denne linjer spøger om hour/minute/second funktionen returnere et tal under 10
            //Hvis ja, indsættes et nul
            this.hDiv.html( hour() < 10 ? '0' + hour() : hour() )
            this.mDiv.html( minute() < 10 ? '0' + minute() : minute() )
            this.sDiv.html( second() < 10 ? '0' + second() : second() )
        }, 1000)
    }
    stop(){
        clearInterval(this.interval)
    }
}