// Superclass
class Being {
    constructor(name) {
      this.name = name; //Gemmer navnet som en egenskab for et objekt
    }
  
    introduce() {
      return `Hi, I'm ${this.name}.`; // Returnere en introduktion
    }
  }
  
  // Underklasse Human 
  class Human extends Being {
    constructor(name, profession) {
      super(name); // Kalder super classens constructur og indsætter navnet
      this.profession = profession; // Tilføjer og gemmer en profession som egenskab 
    }
  
    introduce() {
    // Overskriver superklassens introduce-metode for at inkludere profession
      return `Hi, I'm ${this.name}, and I work as a ${this.profession}.`;
    }
  }
  
  // Underklasse Alien
  class Alien extends Being {
    constructor(name, planet) {
      super(name); // Kalder super classens constructur og indsætter navnet
      this.planet = planet; // Tilføjer og gemmer en profession som egenskab 
    }
  
    introduce() {
    // Overskriver superklassens introduce-metode for at inkludere planet
      return `Greetings! I'm ${this.name} from planet ${this.planet}.`;
    }
  
    alienSpeak() {
    // Laver et array med sætninger som aliens siger
      let phrases = [
        "Zorg blip blop!",
        "Klaatu barada nikto!",
        "Sharg gloop zorp!"
      ];
    }
  }
  
  // Opretter et array med human- og alien objekter
  let beings = [
    new Human("Alice", "Doctor"), // Opretter en human med navn og profession
    new Human("Bob", "Engineer"),
    new Human("Peter", "Teacher"),
    new Alien("Ding", "Xenon"), // Opretter en alien med navn og planet
    new Alien("Dong", "Alpha Centauri"),
    new Alien("Blip", "Omicron Persei 8")
  ];