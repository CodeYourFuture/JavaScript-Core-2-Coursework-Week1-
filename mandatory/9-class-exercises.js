/**
 * exercise1
 * Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!
 *//*
let desktop = {
    caseType: "Tower",
    mouse: "Ifrared",
    screenSize: 25,
    brand: "Dell",
    camera: false,
    speakers: true,
};

/**
 * exercise2
 * Exercise (2)
 * Think of 5 different real world "things" that you can describe with a JavaScript object
 * Assign each of them to a separate variable
 *//*
let transport = {
    type: "bicycle",
    distance: "20km",
    timesPerWeek: 5,
    reason: "it's what I can afford.",
};
console.log(`I own a ${transport.type} and I cover ${transport.distance}, ${transport.timesPerWeek} times per week because ${transport.reason}`);

let person = {
    name: "Douglas",
    surname: "Van Der Merwe",
    hairTypeAndColor: "curly, black",
    eyes: "yes",
    hasTwoArms: true,
    hasTwoLegs: "yes",
    hasPaws: false,
};
console.log(`Hi my name is ${person.name} and my surname is ${person.surname}. I have ${person.hairTypeAndColor} hair.`);

let cyf = {
    whoIsWelcome: "the marginalised",
    cost: "'free 99'",
    remoteLearning: true,
    techRequirements: "workstation, 4mbps+ internet-connection",
    hoursCommitmentPerWeek: 40,
};
console.log(`CodeYourFuture invites ${cyf.whoIsWelcome} at a cost of ${cyf.cost}. All you need is ${cyf.techRequirements} and ${cyf.hoursCommitmentPerWeek} hours per week.`);

/**
 * exercise3
 * The objects below have some syntax issues - try and fix them all!
 *//*
let kitten = {
    furColour: "orange",
    age: "23",
};

let laptop = {
    brand: "Lenovo",
    ram: "5GB",
};

let phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours",
};
console.log(`The ${kitten.furColour} kitten is ${kitten.age} years old.`);
console.log(`The ${kitten.age} years old, ${kitten.furColour} kitten owns a ${laptop.brand} laptop with ${laptop.ram} of ram.`);
console.log(`The ${kitten.age} years old, ${kitten.furColour} kitten owns an ${phone.operatingSystem} phone with ${phone.batteryLife}
 of battery life and a ${phone.megapixels} megapixel front camera.`);

/**
 * Objects Get and Set# - Getting the value of an object's property#
 *//*
let Laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
console.log(laptop.brand);      //access a property value with dot notation//
console.log(laptop["brand"]);   //access a property value with bracket notation//

/*
Console.log the values of each property of "kitten"
*//*
// Exercise 1
let kittens = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

console.log(kittens.ageMonths);
console.log(kittens.isFemale);
console.log(kittens.furColour);

/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*//*

// Exercise 2
let phone1 = {
  brand: 'iPhone',
  model: 'iPhone X',
  launchYear: 2017,
  isUnlocked: true,
};

let phoneBrand = phone1.brand;
let phoneLaunchYear = phone1["launchYear"];

console.log(phoneBrand);
console.log(phoneLaunchYear);

// -> it should output:
// iPhone
// 2017

/** Setting the value of a property */

// Exercise 1
/*
Write code in the space provided so that it outputs "Gilbert"
*/
/*
// WRITE CODE BELOW THIS
kitten.name = "Gilbert";
// WRITE CODE ABOVE THIS

console.log(kitten.name);
// -> it should output: "Gilbert"

// Exercise 2
/*
Write code in the space provided so that the expected values output
*//*

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true
/----------------------------------------------------------------------------------/
/* More Complex Objects */
// Exercise 1
/*
Given the following house - follow the instructions below.
Make sure you run the file after and it outputs the correct results.
*/
/*
let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*//*
// - change the address of "house" to '51 Berkley Road'
house.address = "51 Berkley Road"
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
house["previousOwners"] = ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"
house.currentOwner.lastName = "Montgomery";

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*//*

console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);
/---------------------------------------------------------------------------/
// Exercise 2
/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/
/*
let house1 = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
/*
// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
house1.currentOwner = newCurrentOwner;
// - from the list of previous owners, replace only "John A." with "Stephen B."
house1.previousOwners[1] = "Stephen B.";
// - give the house a new property called 'isForSale' with the value 'false'
house1["isForSale"] = false;
/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*//*
console.log(
  `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house1.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B. Actual result: ${house1.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house1.isForSale}`);
/-------------------------------------------------------------------------------/
// Exercise 3
/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/
/*
let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
/*
// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return (`${house.currentOwner.firstName} ${house.currentOwner.lastName}`);
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  return (`${house1.currentOwner.email}, ${house2.currentOwner.email}`)
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  if (`${house1.price}` > `${house2.price}`) {
    return `${house2.address}`
  }
}  
/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*//*
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);

/-----------------------------------------------------------------------------------------------------------/
/* Object Methods */
//Exercise 1

/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/
/*
let person2 = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello everybody";
  },
  sayName: function () {
    return `My name is ${this.name}`;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/*
console.log(
  `Expected result: Hello everybody. Actual result: ${person2.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person2.sayName()}`
);
  
/---------------------------------------------------------------------------------------------------/
// Exercise 3
/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/
/*
let personX = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
  changeAddress: function (newAddress) {
      return currentAddress = newAddress;
    },
    celebrateBirthday: function () {
      return that.age = that.age + 1;
    }
};
/---------------------------------------------------------------------------------------------------/
//Exercise 4
/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/
/*
let person1 = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend(friend) {
    return this.friends.push(friend);
  }  
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/*
person1.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person1.friends}`
  ); */
//---------------------------------------------------------------------------------------------------//
// Exercise 5
/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/
/*
let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
    this.insertedAmount = amount;     // passing user input "amount" to the key "inserted amount".
  },
  getCoffee: function (coffee) {
    // let result = "";
    Object.entries(this.prices).map(yourCoffee => {                                    // .entries - returns an array of object keys and values.
      if (this.insertedAmount >= yourCoffee[1] && coffee === yourCoffee[0] ) {         // comparing the inserted "coffee" value to the inserted amount, when the input is the same as a key of the "prices" object.
        // console.log(yourCoffee[0]);                                                 // checking result of the if statement.
        return result =  `Please take your ${yourCoffee[0]}`;                          // = true - return this statement.
      } else if (this.insertedAmount < yourCoffee[1] && coffee === yourCoffee[0]) {    // = true - return this statement. less than insert edamount.
        return result = `Sorry you don't have enough money for a ${yourCoffee[0]}`;
      }
    })
    return result;    
  }
};
     

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/*
coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);
*/
// --------------------------------------------------------------------------------------------------- //
/*
Object.keys()
Object.values()
Object.entries()
  
let people = {
  name: "Amy",
  hair: "curly",  
}
  
let test = console.log(`"test" ${Object.keys(people)}`);  //result: "TEST" name,hair
let test1 = console.log(`"test1" ${Object.values(people)}`);  //result: "TEST1" Amy,curly
let test2 = console.log(`"test2" ${Object.entries(people)}`);  //result: "TEST2" name,Amy,hair,curly
*/
 // ---------------------------------------------------------------------------------------------------//
// Arrays of Objects

/*
1) Define an array containing the 3 persons defined below.
2) Return an array of the person names (hint: use map).
3) Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/
/*
let person1 = {
    name: "Alice",
    age: 25
};

let person2 = {
    name: "Bob",
    age: 30
};

let person3 = {
    name: "John",
    age: 20
};
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

/*
let persons = [person1, person2, person3];  // Complete here

let personNames = persons.map(personName => personName.name); // Complete here

let personsYoungerThan28YearsOld = persons.filter(personAge => personAge.age < 28); // Complete here


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
/*
console.log("Question 1: array defined with 3 persons -> ",
    (persons[0] === person1 && persons[1] === person2 && persons[2] === person3) ? 'Passed :)' : 'Not yet :(');

console.log("Question 2: array containing the person names -> ",
    (personNames[0] === "Alice" && personNames[1] === "Bob" && personNames[2] === "John") ? 'Passed :)' : 'Not yet :(');

console.log("Question 3: array containing the persons younger than 28 years old -> ",
    (personsYoungerThan28YearsOld[0] === person1 && personsYoungerThan28YearsOld[1] === person3) ? 'Passed :)' : 'Not yet :(');




 // ---------------------------------------------------------------------------------------------------//
/*

// Exercise 2
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [destination1, destination2, destination3, destination4];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/


let destinationNamesWithin500Kms = travelDestinations.filter(distance => distance.distanceKms < 500).map(reachableDestination => reachableDestination.destinationName);// Complete here
console.log(destinationNamesWithin500Kms);

let destinationNameReachableByFerry = travelDestinations.filter(transportType => transportType.transportations === "ferry").map(transportMode => transportMode.transportations);// Complete here
console.log(destinationNameReachableByFerry);

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter(distanceFar => distanceFar.distanceKms > 300 && distanceFar.transportations == "ferry").map(byTrain => byTrain.travelDestinations); // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
console.log(destinationNamesMoreThan300KmsAwayByTrain);

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);









 // ---------------------------------------------------------------------------------------------------//
  