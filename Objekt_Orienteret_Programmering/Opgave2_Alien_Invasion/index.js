//'forEach' fungere som et loop, der køre arrayet "being" igennem
//'forEach' metoden tager en funktion som argument. Den funktion køre 1 gang for hvert element i arrayet
beings.forEach((being) => {
    // Opretter et nyt HTML `div`-element til hvert objekt, som gemmems i "card"
    let card = document.createElement("div");

    // Tildeler en CSS-klasse baseret på, om objektet er en Alien eller Human.
    // 'instanceof' tjekker om objekter "being" er en instans af klassen "Alien"
    card.className = `card ${being instanceof Alien ? "alien" : "human"}`;

    card.textContent = being.name; // Sætter kortets tekst til objektets navn.

    // Tilføjer en klik-hændelse til kortet. Der tjekke om der bliver klippet på kortet
    // hvis der bliver klikket på kortet, køres funktionen
    card.addEventListener("click", () => {
        let intro = being.introduce(); // Henter introduktionen fra objektet.
        let alienSpeak = being instanceof Alien ? being.alienSpeak() : null; // Hvis objektet er en Alien, hentes en tilfældig aliensætning.

        // Viser en beskedboks med introduktionen og evt. aliensprog.
        alert(intro + (alienSpeak ? `\nAlien says: ${alienSpeak}` : ""));
        console.log(intro + (alienSpeak ? ` Alien says: ${alienSpeak}` : ""));

    });

    // Tilføjer kortet til containeren i HTML-dokumentet.
        container.appendChild(card);
});
