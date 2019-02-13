var recipeFinder = function (items, recipes) {
  let result = {};
  let diff;
  for (var recipe in recipes) {
    console.log(recipes[recipe]['ingredients']);
    diff = arraySetDifference(items, recipes[recipe]['ingredients']);
    console.log(diff);
    if (diff.length < 3) {
      console.log(diff);
      result[recipe] = diff.length;
    }
  }
  return result
}

var arraySetDifference = function (arr1, arr2) {
  return arr2.filter(ele => !arr1.includes(ele));
}

var rs = {
    'chicken soup': {
        ingredients: ['salt', 'chicken', 'noodles'],
        quality: 5,
    },
    'pb & j': {
        ingredients: ['bread', 'peanut butter', 'jelly'],
        quality: 3,
    },
};

var ing = ['milk', 'eggs', 'bread', 'beer'];

console.log(recipeFinder(ing, rs));
