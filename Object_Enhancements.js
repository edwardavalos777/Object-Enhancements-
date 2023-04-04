/* function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
} 
*/

/* Write code above in ES2015 */ 
//code here written using object literal shorthand syntax
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  /* 
  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!" 
*/

/* Computed Property Names in ES2015 */
const favoriteNumber = 42;

const teacher = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

/* Object Methods in ES2015 */ 
const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  };

/* Animal Object Function Using Object Enhancements */
function createAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        return noise;
      }
    };
 const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

  }
  

  




 


  

