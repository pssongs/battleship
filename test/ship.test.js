const Ship = require('../src/ship')

const testShip = Ship.createShip(3,'Destroyer')
const testShip2 = Ship.createShip(2,'Cruiser')

test('Ship property check',() => {
  expect(testShip.getLength()).toEqual(3)
  expect(testShip.sunken()).toBeFalsy();
  expect(testShip.getHits()).toEqual(0);
})

test('SHIP HIT TEST', () => {
  testShip.hit();
  expect(testShip.getHits()).toEqual(1);
  testShip.hit();
  testShip.hit();
  expect(testShip.getHits()).toEqual(3);
  expect(() => testShip.hit()).toThrow('ship already sunk');
});

test('TEST SHIP SUNK', () => {   
  testShip2.hit();
  testShip2.hit();
  expect(testShip2.getSunk()).toBeTruthy;
});

