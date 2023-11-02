// Read the JSON data from the food.json file
const foodData = require("./food.json");

function listOfFood(food = "") {
  if (food.length > 0) {
    return foodData.filter((food) => food.category === food);
  } else {
    return foodData;
  }
}

console.log("1. List all the food items.");
console.log(listOfFood());
console.log("2. List all the food items with category vegetables.");
console.log(listOfFood("Vegetable"));
console.log("3. List all the food items with category fruit.");
console.log(listOfFood("Fruit"));
console.log("4. List all the food items with category protein.");
console.log(listOfFood("Protein"));
console.log("5. List all the food items with category nuts.");
console.log(listOfFood("Nuts"));
console.log("6. List all the food items with category grains.");
console.log(listOfFood("Grain"));
console.log("7. List all the food items with category dairy.");
console.log(listOfFood("Dairy"));


function getAboveBelowCalorie(condition) {
  if (condition === "below") {
    return foodData.filter((food) => food.calorie < 100);
  } else if (condition === "above") {
    return foodData.filter((food) => food.calorie > 100);
  }
}

console.log("8. List all the food items with calorie above 100.");
console.log(getAboveBelowCalorie("above"));
console.log("9. List all the food items with calorie below 100.");
console.log(getAboveBelowCalorie("below"));


function listFoodItemsByProteinCabContent(type) {
  if(type === "protein") {
    return foodData.sort((a, b) => b.protiens - a.protiens);
  }
  else if(type === "cab") {
    return foodData.sort((a, b) => a.cab - b.cab);
  }
}

console.log("10. List all the food items with highest protein content to lowest.");
console.log(listFoodItemsByProteinCabContent("protein"));
console.log("11. List all the food items with lowest cab content to highest.");
console.log(listFoodItemsByProteinCabContent("cab"));


// =======================================================================================================================================


// // 1. List all the food items.
// function listAllFoodItems() {
//     return foodData;
// }

// // 2. List all the food items with category vegetables.
// function listVegetableFoodItems() {
//     return foodData.filter((food) => food.category === 'Vegetable');
// }

// // 3. List all the food items with category fruit.
// function listFruitFoodItems() {
//     return foodData.filter((food) => food.category === 'Fruit');
// }

// // 4. List all the food items with category protein.
// function listProteinFoodItems() {
//     return foodData.filter((food) => food.category === 'Protein');
// }

// // 5. List all the food items with category nuts.
// function listNutsFoodItems() {
//     return foodData.filter((food) => food.category === 'Nuts');
// }

// // 6. List all the food items with category grains.
// function listGrainFoodItems() {
//     return foodData.filter((food) => food.category === 'Grain');
// }

// // 7. List all the food items with category dairy.
// function listDairyFoodItems() {
//     return foodData.filter((food) => food.category === 'Dairy');
// }

// // 8. List all the food items with calorie above 100.
// function listFoodItemsCalorieAbove100(calorie) {
//     return foodData.filter((food) => food.calorie > calorie);
// }

// // 9. List all the food items with calorie below 100.
// function listFoodItemsCalorieBelow100(calorie) {
//     return foodData.filter((food) => food.calorie < calorie);
// }

// // 10. List all the food items with highest protein content to lowest.
// function listFoodItemsByProteinContent() {
//     return foodData.sort((a, b) => b.protiens - a.protiens);
// }

// // 11. List all the food items with lowest cab content to highest.
// function listFoodItemsByCabContent() {
//     return foodData.sort((a, b) => a.cab - b.cab);
// }


// // Call Function
// console.log("1. List all the food items.");
// console.log(listAllFoodItems());

// console.log("2. List all the food items with category vegetables.");
// console.log(listVegetableFoodItems());

// console.log("3. List all the food items with category fruit.");
// console.log(listFruitFoodItems());

// console.log("4. List all the food items with category protein.");
// console.log(listProteinFoodItems());

// console.log("5. List all the food items with category nuts.");
// console.log(listNutsFoodItems());

// console.log("6. List all the food items with category grains.");
// console.log(listGrainFoodItems());

// console.log("7. List all the food items with category dairy.");
// console.log(listDairyFoodItems());

// console.log("8. List all the food items with calorie above 100.");
// console.log(listFoodItemsCalorieAbove100(100));

// console.log("9. List all the food items with calorie below 100.");
// console.log(listFoodItemsCalorieBelow100(100));

// console.log("10. List all the food items with highest protein content to lowest.");
// console.log(listFoodItemsByProteinContent());

// console.log("11. List all the food items with lowest cab content to highest.");
// console.log(listFoodItemsByCabContent());
