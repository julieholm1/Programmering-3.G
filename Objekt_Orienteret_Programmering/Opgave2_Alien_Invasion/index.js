beings.forEach((being) => {
  let card = document.createElement("div");
  
  // Tildeler en CSS-klasse baseret på om objektet er en Alien eller Human
  if (being instanceof Alien) {
    card.className = "card alien";
  } else {
    card.className = "card human";
  }
  
  card.textContent = being.name; // Sætter kortets tekst til objektets navn

  // Tilføjer klik-hændelse
  card.addEventListener("click", () => {
    let intro = being.introduce();
    let alienSpeak = being instanceof Alien ? being.alienSpeak() : null;

    let message = intro + (alienSpeak ? `\nAlien says: ${alienSpeak}` : "");

    // Rydder eksisterende beskeder
    let messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = ""; 

    // Skab nyt <p>-element og vis besked
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    
    // Ændrer tekstfarven afhængig af væsnet
    messageElement.style.color = being instanceof Alien ? '#28a745' : '#007bff'; // Alien - grøn, Human - blå

    // Tilføj besked til containeren
    messageContainer.appendChild(messageElement);

    // Tilføj billede baseret på væsnet
    let imageElement = document.createElement("img");
    if (being instanceof Alien) {
      imageElement.src = 'https://cdn.pixabay.com/photo/2023/09/24/03/08/ai-generated-8272073_1280.png';  // Erstat med et korrekt billede af Alien
    } else {
      imageElement.src = 'assets/elias.png';  // Erstat med et korrekt billede af Human
    }
    messageContainer.appendChild(imageElement);
  });

  // Tilføj kortet til containeren
  container.appendChild(card);
});
