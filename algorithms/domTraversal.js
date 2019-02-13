var domTraversal = function (ele) {
  let queue = [];
  let temp;
  let children = ele.children;
  let result = [];

  for (i = 0; i < children.length; i++) {
    if (children[i].children && children[i].children.length > 0) {
      for (l = 0; l < children[i].children.length; l++) {
        if (children[i].children[l].tagname === "UL" || children[i].children[l].tagName === "LI") {
          queue.push(children[i].children[l]);
        }
      }
    } else if (children[i].innerText && children[i].innerText.includes("Mr.")) {
      result.push(children[i]);
    }
  }

  while (queue.length > 0) {
    temp = queue.shift();
    if (temp.children && temp.children.length > 0) {
      for (l = 0; l < temp.children.length; l++) {
        if (temp.children[l].tagName === "UL" || temp.children[l].tagName === "LI") {
          queue.push(temp.children[l]);
        }
      }
    } else if (temp.innerText.includes("Mr.")) {
      result.push(temp.innerText);
    }
  }

  return result;
}
