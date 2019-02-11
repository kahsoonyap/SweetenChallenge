var delim = function(str) {
  const delims = {
    '(' : ')',
    '[' : ']',
    '{' : '}',
    '\'' : '\'',
    '\"' : '\"'
  };

  let stack = [];
  let ele = '';
  
  for (i = 0; i < str.length; i++) {
    if (str[i] in delims) {
      stack.push(str[i]);
    } else if (Object.keys(delims).find(key => delims[key] === str[i]) !== undefined) {
      ele = stack.pop();
      if (delims[ele] != str[i]) {
        return false;
      }
    }
  }
  if (stack.length == 0) {
    return true;
  }
  return false;
}

console.log(delim('(123[456]{7})'));
console.log(delim('{ab(c[d[e]])}'));
console.log(delim('78[()]{}'));
console.log(delim('(12[3)]'));
console.log(delim('{abc[de]'));
console.log(delim('({[})]'));
