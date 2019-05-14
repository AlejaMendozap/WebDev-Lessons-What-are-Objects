var carsObject = {
  car1: {
    make: 'Ford',
    model: 'Fiesta',
    drive: 'TODO',
    location: [0, 0],
  },
};

/**
1. Write a function for the drive key in carsObject that takes in three arguments (x, y, car) and changes the location
of the the car specified by the third argument. Figure out how you can alter the location of the car using only
the key:value pairs given above. If you run into issues, try building the function in the object itself.

Example:

carsObject.car1.drive(3, 4, car1);
carsObject.car1.location -> [3, 4]

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

// 2. Add a property to car1 called year and give it a value of '2003'

/**
3. Write a function called editCars that allows the user to specify a key they want to change, the value they want
to change it to, and the car these changes should be made on (key, value, car). Assume every car specified by the car argument is
within carsObject.
*/
