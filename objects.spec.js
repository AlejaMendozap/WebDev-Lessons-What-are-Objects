describe('drive function', () => {
  it('should change the location of the the car specified by the third argument', () => {
    carsObject.car1.drive(9, 10, 'car1');
    expect(carsObject.car1.location).to.deep.equal([9, 10]);
    carsObject.car1.drive(20, 19, 'car1');
    expect(carsObject.car1.location).to.deep.equal([20, 19]);
  });
  it("should maintain location's data structure (an array)", () => {
    carsObject.car1.drive(11, 23, 'car1');
    expect(Array.isArray(carsObject.car1.location)).to.equal(true);
  });
});

describe('year property', () => {
  it("car1 should contain a property year equal to '2003' ", () => {
    expect(carsObject.car1.year).to.equal('2003');
    expect(typeof carsObject.car1.year).to.equal('string');
  });
});

describe('editCars', () => {
  it('should change the key specified on the car specified to the value specified', () => {
    (carsObject.car2 = {
      make: 'Ford',
      model: 'Fiesta',
      drive: 'TODO',
      location: [0, 0],
    }),
      editCars('make', 'Chevy', 'car2');
    expect(carsObject.car2.make).to.equal('Chevy');
  });
});
