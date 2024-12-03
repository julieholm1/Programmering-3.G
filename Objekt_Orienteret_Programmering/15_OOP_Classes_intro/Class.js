console.log('OOP is here')

class Being {
  //kaldes ved oprettelse af nye objekter 
  constructor(name, age) {
    this.name = name
    this.age = age
  }
    
  introduce(){
    console.log(`Hello from ${this.name}, ${this.age} years old`)
  }
}

class Alien extends Being{
  constructor(name, age, planet){
    super(name, age)
    this.planet = planet
  }

  introduce(){
    super.introduce()
    console.log(`AND I'am a ALIAN, I'am a legal Alien from ${this.planet}`)
  }
}

class Human extends Being{
  constructor(name, age, nof){
    super(name, age)
    this.nof = nof
  }

  brag(){
    for(let i = 0; i < this.nof; i++){
      console.log('I am superior because I have so many fingers:')
    }
  }
}



