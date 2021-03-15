class Animal {
    constructor(name,sound) {
        this.name = name;
        this.sound = sound;
    }
    getName() {
        return this.name
    }
    getSound() {
        return this.sound   
    }
    print() {
        console.log(`The animal ${this.name} makes the sound of ${this.sound}`);
    }
}
const Dog = new Animal('dog','bark');
const Cat = new Animal('cat','yell');
const Bird = new Animal('bird', 'chirps');
Dog.print()
Cat.print()
Bird.print()