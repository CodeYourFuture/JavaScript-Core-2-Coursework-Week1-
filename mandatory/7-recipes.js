/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- title (a string), 
- servings (a number), and 
- ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = {
  title: "Bread",
  serves: 2,
  ingredients: ["Water", "salt", "flour", "yeast"],
};

console.log(recipes.title);
console.log(`Serves: ${recipes.serves}`);
console.log("Ingredients:");
recipes.ingredients.forEach((ingredient) => console.log(ingredient));
