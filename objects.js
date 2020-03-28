const cars = [{
  make: 'Ford',
  model: 'Fiesta',
  drive: 'TODO',
  location: [0, 0],
}];

/**
1. Write a function for the drive key in cars that takes in three arguments (x, y, car) and changes the location
of the the car specified by the third argument. Figure out how you can alter the location of the car using only
the key:value pairs given above. If you run into issues, try building the function in the object itself.

Example:

cars[0].drive(3, 4, cars[0]);
cars[0].location -> [3, 4]

HINT: you can use hard brackets [] to indicate to JavaScript that the following is a variable and NOT
an exact key name.
Example:

 * var counter = 0;
 * var objectWithCount = {}
 *
 * function changeObjectCountBasedOnCounter = () {
 *   objectWithCount[counter] = counter;
 * }
 *
 * counter = 2;
 * changeObjectCountBasedOnCounter();
 *
 * console.log(objectWithCount.2) -> 2

*/

// 2. Add a key to the first car object in the cars array called year and give it a value of '2003'

/**
3. Write a function called editCars that allows the user to specify a key they want to change, the value they want
to change it to, and the car these changes should be made on (key, value, car). Assume every car specified by the car argument is
within the cars array.
*/
