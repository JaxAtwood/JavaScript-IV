/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

class GameObject {
    constructor(attributes) {
        this.newCreatedAt = attributes.createdAt;
        this.newName = attributes.name;
        this.newDimensions = attributes.dimensions;
}
    destroy() {
        console.log(`${this.newName} was removed from the game.`)
    }
}

class CharacterStats extends GameObject {
    constructor(placeholder) {
      super(placeholder); //replaces Person.call
      this.newhealthPoints = placeholder.healthPoints;
    }//write methods here!
    takeDamage() {
      console.log(`${this.newName} took damage.`)
    }
}//child

class Humanoid extends CharacterStats{
    constructor(placeholderAgain) {
      super(placeholderAgain); //replaces Person.call
      this.newTeam = placeholderAgain.team;
      this.newWeapons = placeholderAgain.weapons;
      this.newLanguage = placeholderAgain.language;
    }//write methods here!
    greet() {
      console.log (`${this.newName} offers a greeting in ${this.newLanguage}.`)
    }
}

    const gameInfoOne = new GameObject ({
        createdAt: 9987,
        name: "Jackie",
        dimensions: 500,
    });
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  

    console.log(mage.newCreatedAt); // Today's date
    console.log(archer.newDimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.newhealthPoints); // 15
    console.log(mage.newName); // Bruce
    console.log(swordsman.newTeam); // The Round Table
    console.log(mage.newWeapons); // Staff of Shamalama
    console.log(archer.newLanguage); // Elvish
    archer.greet(); // Lilith offers a greeting in Elvish.
    mage.takeDamage(); // Bruce took damage.
    swordsman.destroy(); // Sir Mustachio was removed from the game.