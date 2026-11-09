Type Narrowing in TypeScript: Using typeof, instanceof, and in

In TypeScript, a variable can have more than one possible type. But in application, a specfic type for a variable should only be used. Type narrowing is the way that spacify a specfic type for a variable. It means checking a value’s type at runtime so the compiler can treat it as a more specific type inside that block of code.

What is type narrowing?: 
Narrowing means going from a wide type (like a union) to a smaller, more exact type. The example is given below:
Without narrowing:
function printLength(value: string | number) {
  console.log(value.length) // Error: Property 'length' does not exist on type 'number'
}

With narrowing:
function printLength(value: string | number) {
  console.log(value.length) // Error: Property 'length' does not exist on type 'number'
}

Narrowing with typeof:
We can use typeof for primitive types: string, number, boolean, bigint, symbol, undefined, and function. For example:
function format(input: string | number | boolean) {
  if (typeof input === "string") {
    return input.toUpperCase()      
  }
  if (typeof input === "number") {
    return input.toFixed(2)         
  }
  return input ? "Yes" : "No"    
}

Narrowing with instanceof:
We can use instanceof when we have class instances. It checks whether a value was created from a certain class. Example:
class Dog {
  bark() { console.log("Woof!") }
}

class Cat {
  meow() { console.log("Meow!") }
}

function makeSound(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark() 
  } else {
    pet.meow() 
  }
}

makeSound(new Dog()) // "Woof!"
makeSound(new Cat()) // "Meow!"

Narrowing with the in operator:
The in operator checks whether a property exists on an object. Example:

interface Car {
  drive(): void
}

interface Boat {
  sail(): void
}

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive() 
  } else {
    vehicle.sail()  
  }
}

Type narrowing works safely with values that can be more than one type. The simple rule is: we use typeof for primitives, instanceof for classes, and in for checking object properties.