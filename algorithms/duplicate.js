// using hash
var duplicate1 = function(arr) {
  let bucket = {};
  let keys;

  for (index = 0; index < arr.length; index++) {
    keys = Object.keys(bucket);
    if (keys.includes('' + arr[index])) {
      return arr[index];
    } else {
      bucket[arr[index]] = 1;
    }
  }

  return undefined;
}

// brute force
var duplicate2 = function(arr) {
  let temp;

  if (arr.length > 1) {
    for (index1 = 1; index1 < arr.length; index1++) {
      temp = arr[index1];
      for (index2 = index1 - 1; index2 >= 0; index2--) {
        if (temp == arr[index2]) {
          return temp;
        }
      }
    }
  }
  return undefined;
}

console.log(duplicate1([0,1,2,3,4,5,6,7,8,9]));
console.log(duplicate1([0,5235,54365,123,54756,869,34,5345,134,35,765,86,679,789,0]));
console.log(duplicate1([2,4,5,7,8,5,4,2,6,7,8,9,0]));

console.log(duplicate2([0,1,2,3,4,5,6,7,8,9]));
console.log(duplicate2([0,5235,54365,123,54756,869,34,5345,134,35,765,86,679,789,0]));
console.log(duplicate2([2,4,5,7,8,5,4,2,6,7,8,9,0]));
