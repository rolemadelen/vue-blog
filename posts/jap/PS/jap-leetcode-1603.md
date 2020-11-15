## Design Parking System
[LeetCode #1603](https://leetcode.com/problems/design-parking-system/)

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

- `ParkingSystem(int big, int medium, int small)` Initializes object of the `ParkingSystem` class. The number of slots for each parking space are given as part of the constructor.
- `bool addCar(int carType)` Checks whether there is a parking space of `carType` for the car that wants to get into the parking lot. `carType` can be of three kinds: `big`, `medium`, or `small`, which are represented by 1, 2, and 3 respectively. **A car can only park in a parking space of its** `carType`. If there is no space available, return `false`, else park the car in that size space and return `true`.

## Solution in Ruby

```rb
# Runtime: 88 ms, faster than 74.36%
# Memory Usage: 210.5 MB, less than 6.41%
#
# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem.new(big, medium, small)
# param_1 = obj.add_car(car_type)
class ParkingSystem
  attr_accessor :cnt, :cntCapacity

=begin
    :type big: Integer
    :type medium: Integer
    :type small: Integer
=end
  def initialize(big, medium, small)
    @cntCapacity = [big, medium, small]
    @cnt = [0, 0, 0]
  end

=begin
    :type car_type: Integer
    :rtype: Boolean
=end
  def add_car(car_type)
    if @cnt[car_type-1] >= @cntCapacity[car_type-1]
      return false
    else
      @cnt[car_type-1] += 1
      return true
    end
  end
end
```