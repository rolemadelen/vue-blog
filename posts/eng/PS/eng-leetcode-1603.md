## Design Parking System
[LeetCode #1603](https://leetcode.com/problems/design-parking-system/)

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

- `ParkingSystem(int big, int medium, int small)` Initializes object of the `ParkingSystem` class. The number of slots for each parking space are given as part of the constructor.
- `bool addCar(int carType)` Checks whether there is a parking space of `carType` for the car that wants to get into the parking lot. `carType` can be of three kinds: `big`, `medium`, or `small`, which are represented by 1, 2, and 3 respectively. **A car can only park in a parking space of its** `carType`. If there is no space available, return `false`, else park the car in that size space and return `true`.

## Solution in C++

```cpp
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 *
 * Runtime: 84 ms, faster than 90.67%
 * Memory Usage: 33.5 MB, less than 7.82%
 */
class ParkingSystem {
  private:
    int carCapacity[3];
    int cnt[3];
  public:
    ParkingSystem(int big, int medium, int small) {
      carCapacity[0] = big;
      carCapacity[1] = medium;
      carCapacity[2] = small;

      cnt[0] = cnt[1] = cnt[2] = 0;
    }

    bool addCar(int carType) {
      return carCapacity[carType-1] > (cnt[carType-1])++;
    }
};
```