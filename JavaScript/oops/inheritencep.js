//create 2 classes:
// Parent: Animal
// property: name
// method: speak() → prints "name makes a sound"
// Child: Dog (extends Animal)
// method: speak() → prints "name barks"
// 🔹 Create object:
// let d = new Dog("Tommy");
// d.speak();
// ✔ Expected Output:
// Tommy barks
class Animal
{
    name;
    constructor(name)
    {
        this.name=name;
    }
    speak()
    {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal
{
    speak()
    {
        console.log(`${this.name} barks`);
    }
}
let d=new Dog("tommy");
d.speak();
