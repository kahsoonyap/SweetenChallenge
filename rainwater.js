var rainwater = function(arr) {
  let right = 0;
  let count = 0;
  let total = 0;
  for (left = 0; left < arr.length - 1; left++) {
    if (arr[left] > 0) {
      right = left + 1;
      while (right < arr.length && arr[right] < arr[left]) {
        count += arr[right];
        right++;
      }
      if (arr[right] >= arr[left]) {
        total += arr[left] * (right - left - 1) - count;
        left = right - 1;
      }
    }
    count = 0;
  }
  return total;
}

console.log(rainwater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(rainwater([3,0,0,2,0,4]));
