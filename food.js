const fs = require('fs');

// Read the contents of the "food.json" file
fs.readFile('food.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const foodData = JSON.parse(data);

    // List all food items
    function listAllFoodItems() {
      console.log('--- All Food Items ---');
      foodData.forEach((food) => {
        console.log(food.foodname);
      });
      console.log('----------------------');
    }

    // List food items with category "Vegetable"
    function listFoodItemsByCategory(category) {
      console.log(`--- Food Items with Category: ${category} ---`);
      const filteredFood = foodData.filter((food) => food.category === category);
      filteredFood.forEach((food) => {
        console.log(food.foodname);
      });
      console.log('----------------------');
    }

    // List food items with calorie above or below a given threshold
    function listFoodItemsByCalorie(threshold, above) {
      const operator = above ? '>' : '<';
      const comparator = above ? 'Above' : 'Below';
      console.log(`--- Food Items with Calorie ${comparator} ${threshold} ---`);
      const filteredFood = foodData.filter((food) => eval(`food.calorie ${operator} ${threshold}`));
      filteredFood.forEach((food) => {
        console.log(food.foodname);
      });
      console.log('----------------------');
    }

    // List food items by highest protein content to lowest
    function listFoodItemsByProteinContent() {
      console.log('--- Food Items by Highest Protein Content to Lowest ---');
      const sortedFood = foodData.sort((a, b) => b.protiens - a.protiens);
      sortedFood.forEach((food) => {
        console.log(food.foodname);
      });
      console.log('----------------------');
    }

    // List food items by lowest carb content to highest
    function listFoodItemsByCarbContent() {
      console.log('--- Food Items by Lowest Carb Content to Highest ---');
      const sortedFood = foodData.sort((a, b) => a.cab - b.cab);
      sortedFood.forEach((food) => {
        console.log(food.foodname);
      });
      console.log('----------------------');
    }

    // Call all the methods
    listAllFoodItems();
    listFoodItemsByCategory('Vegetable');
    listFoodItemsByCategory('Fruit');
    listFoodItemsByCategory('Protein');
    listFoodItemsByCategory('Nuts');
    listFoodItemsByCategory('Grain');
    listFoodItemsByCategory('Dairy');
    listFoodItemsByCalorie(100, true); // Above 100
    listFoodItemsByCalorie(100, false); // Below 100
    listFoodItemsByProteinContent();
    listFoodItemsByCarbContent();
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});