//'forEach' fungere som et loop, der køre arrayet "being" igennem
//'forEach' metoden tager en funktion som argument. Den funktion køre 1 gang for hvert element i arrayet
beings.forEach((being) => {
    let card = document.createElement("div"); // Lav et nyt 'div'-element

    // Tildeler en CSS-klasse baseret på, om objektet er en Alien eller Human.
    // 'instanceof' tjekker om hvilken type et objekt høre til, om det er alian eller human
    if (being instanceof Alien) {
      card.className = "card alien";
        } else {
      card.className = "card human";
        }
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

