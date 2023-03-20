console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog']
// Used to console log the animal array variable
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods= ['oreos', 'seafood', 'steak', 'spaghetti']

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('my favorite foods are: ' , favoriteFoods );

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array --');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of foods:', favoriteFoods.length)
// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('The last animal is a', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('The last Animal is a', animalArray[animalArray.length-1])


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
// Used to log the new animal array that was pushed
// into the animalArray variable
console.log('Added an animal to end,', animalArray)

// 4.a. TODO: Add a new food at the end of your array & log the array

favoriteFoods.push ('pizza');

// Used to push the pizza item into the favorite foods variable
console.log('almost forgot', favoriteFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();

// Used to remove a item from the animal array using the pop command
// and then logging the removed item and the animal array variable
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood= favoriteFoods.pop();

// Used to log the removed food item and then 
// log the favoriteFoods
console.log('Nevermind on the', removedFood);
console.log('My favorites are still', favoriteFoods)

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('Sushi');
console.log(`Incoming new number one: ${favoriteFoods}`) 

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

removedFood = favoriteFoods.shift()

// Used for the removedfood variable to log the food that
// that was removed and the list of favorite foods
console.log(`On second thought no on the ${removedFood}`);
console.log(`My favorite foods are still ${favoriteFoods}`);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favoriteFoods[1]= 'sushi'

// Used to log the favorite foods variable
console.log(favoriteFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
favoriteFoods.sort();
favoriteFoods.reverse();
console.log(favoriteFoods)
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
let string=(favoriteFoods.toString())

// Used to log the string variable which contains the 
// the tostring() command and then to join and.
console.log(string)
console.log(favoriteFoods.join(' and '))

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

let merged= [...favoriteFoods, ...animalArray];

// Used to log the merged varaible favoriteFoods and
// animalArray.
console.log(merged);