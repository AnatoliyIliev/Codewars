class Marine {
  constructor() {
    this.health = 100;
  }
  accept(visitor) {
    this.health = visitor.visitLight(this.health);
  }
}

class Marauder {
  constructor() {
    this.health = 125;
  }
  accept(visitor) {
    this.health = visitor.visitArmored(this.health);
  }
}

class TankBullet {
  visitLight(unit) {
    return unit - 21;
  }
  visitArmored(unit) {
    return unit - 32;
  }
}

let bullet = new TankBullet();
let light = new Marine();

light.accept(bullet);
console.log(light.health); //, 100 - 21);

let armored = new Marauder();

armored.accept(bullet);
console.log(armored.health); //, 125 - 32);

/*
The Visitor Design Pattern can be used, for example, to determine how an attack deals a different amount of damage to a unit in the StarCraft game.

The pattern consists of delegating the responsibility to a different class.

When a unit takes damage it can tell the visitor what to do with itself.

Your Task
Complete the code so that when a Tank attacks a Marine it takes 21 damage and when a Tank attacks a Marauder it takes 32 damage.

The Marine's initial health should be set to 100 and the Marauder's health should be set to 125.

You have 3 classes:

Marine: has a health property and accept(visitor) method
Marauder: has a health property and accept(visitor) method
TankBullet: the visitor class. Has visitLight(unit) and visitArmored(unit) methods
Ressources
PatternCraft > Visitor
SourceMaking > Visitor
Wikipedia > Visitor
PatternCraft series
State Pattern
Strategy Pattern
Visitor Pattern
Decorator Pattern
Adapter Pattern
Command Pattern
The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.


*/
