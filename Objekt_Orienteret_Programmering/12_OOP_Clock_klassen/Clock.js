console.log('Clock is here')

// Når en klasses objekter kan opføre sig forskelligt afhængig af argumenter i constructoren 
// kaldes det POLYMORFI
class Clock {
    constructor(div, style) {
        // Gemmer referencer til div-elementet og stiltypen.
        this.div = div
        this.style = style

        // Opretter tre underdiv'er til at vise timer, minutter og sekunder.
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        // Tilføjer de tre underdiv'er som børn af hoveddiv'en.
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)

        // Interval til at opdatere tiden  
        this.interval

        // Variabler til alarmen
        this.alarmSet = false
        this.alarmHours = null
        this.alarmMinutes = null
        this.alarmSeconds = null
        this.alarmRinging = false

        // Lydfil til alarm
        this.alarmSound = loadSound('assets/alarm.mp3')

        //Styles 
        this.div.style(`
            width: 12rem;
            height: 5rem;
            border: 4px dotted gray;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 1rem;
            border-radius: 2rem;
            place-items: center;
            font-family: Cambria;
            font-size: 1.5rem;
        `)

        //Skifter baggrund baseret på stiltypen
        switch (style) {
            case 'pink':
                this.div.style('background', 'hotpink')
                break
            case 'black':
                this.div.style('background', 'black')
                this.div.style('color', 'white')
                break
            default:
                this.div.style('background', 'rgba(0,0,0,0)')
        }

        //Mousepressed for at stoppe alarmen
        this.div.mousePressed(() => {
            if (this.alarmRinging) {
                this.stopAlarm()
            }
        })
    }

    start() {
        // setInterval kalder en funktion, der opdaterer uret
        this.interval = setInterval(() => {
            this.hDiv.html(hour() < 10 ? '0' + hour() : hour())
            this.mDiv.html(minute() < 10 ? '0' + minute() : minute())
            this.sDiv.html(second() < 10 ? '0' + second() : second())
            this.checkAlarm()
        }, 1000)
    }

    //Stopper uret ved at rydde intervallet
    stop() {
        clearInterval(this.interval)
    }

    // Funktionen der sætter alarmen 
    setAlarm(h, m, s) {
        this.alarmHours = h
        this.alarmMinutes = m
        this.alarmSeconds = s
        this.alarmSet = true
        console.log(`Alarm set to ${h}:${m}:${s}`) //Logger alarmtidspunkterne
    }

    // Tjekker om det aktuelle tidspunkt matcher alarmens indstilling.
    checkAlarm() {
        if (this.alarmSet) {
            if (this.alarmHours == hour() && this.alarmMinutes == minute() && this.alarmSeconds == second()) {
                console.log('ALARM GO OFF NOW!')
                this.showAlarm()
            }
        }
    }

    showAlarm() {
        this.div.style('background', 'red')
        this.div.style('color', 'yellow')
        this.div.style('border', '4px solid yellow')
        this.alarmRinging = true

        // Afspil alarmlyd
        if (this.alarmSound) {
            this.alarmSound.loop()
        }
    }

    stopAlarm() {
        console.log('Alarm stopped!')
        this.alarmRinging = false
        this.alarmSet = false

        // Gendan oprindelig styling
        this.div.style('background', this.style === 'black' ? 'black' : 'rgba(0,0,0,0)')
        this.div.style('color', this.style === 'black' ? 'white' : 'black')
        this.div.style('border', '4px dotted gray')

        // Stop alarmlyd
        if (this.alarmSound) {
            this.alarmSound.stop()
        }
    }
}
