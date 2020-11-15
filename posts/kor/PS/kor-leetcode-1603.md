## Design Parking System
[LeetCode #1603](https://leetcode.com/problems/design-parking-system/)

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

- `ParkingSystem(int big, int medium, int small)` Initializes object of the `ParkingSystem` class. The number of slots for each parking space are given as part of the constructor.
- `bool addCar(int carType)` Checks whether there is a parking space of `carType` for the car that wants to get into the parking lot. `carType` can be of three kinds: `big`, `medium`, or `small`, which are represented by 1, 2, and 3 respectively. **A car can only park in a parking space of its** `carType`. If there is no space available, return `false`, else park the car in that size space and return `true`.

## Solution in JS

```js
/**
 * Runtime: 156 ms, faster than 37.73%
 * Memory Usage: 46.8 MB, less than 20.10%
 *
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
let cntCapacity;
let cnt;

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  cntCapacity = [big, medium, small];
  cnt = [0, 0, 0];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (cntCapacity[carType-1] == cnt[carType-1]) return false;
  else {
    cnt[carType-1] += 1;
    return true;
  }
};
```