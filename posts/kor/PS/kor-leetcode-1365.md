## How Many Numbers Are Smaller Than the Current Number
[LeetCode #1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

Given the array nums, for each `nums[i]` find out how many numbers in the array are smaller than it. 
That is, for each `nums[i]` you have to count the number of valid `j`'s such that `j != i` **and** `nums[j] < nums[i]`.

## Solution in JS

```js
/**
 * Runtime: 96 ms, faster than 68.18%
 * Memory Usage: 41 MB, less than 13.65%
 */
var smallerNumbersThanCurrent = function(nums) {
  let temp = [...nums].sort((a, b) => {return a-b;});
  let table = new Array(101).fill(0);
  let cnt = 1;
  table[nums[0]] = 0;
  
  for(let i=1; i<nums.length; ++i) {
    table[temp[i]] = ((temp[i-1] == temp[i]) ? table[temp[i-1]] : cnt);
    ++cnt;
  }

  for(let i=0; i<nums.length; ++i) {
    temp[i] = table[nums[i]];
  }

  return temp;
};
```

JS에서 `sort()`는 숫자도 문자열로 취급한다는 걸 깜빡했다.

이렇게 해야 제대로 정수가 정렬이 된다.
```js
nums.sort(a,b) => {
    return a-b;
}
```

그리고 배열 복사하는 방법도 몰랐다.

아래처럼 해서 정렬된 배열만 저장하려고 했는데, 본 배열도 수정되어 있었다.
```js
let temp = nums.sort();
```

그래서 배열을 클론하려면 이렇게.
```js
// 옛날 버전
let cloneSheeps = sheeps.slice();

// ES6 버전
let temp = [...nums];
```