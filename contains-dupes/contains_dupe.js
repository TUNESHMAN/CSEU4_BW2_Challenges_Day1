// Method 1
let array1 = [1, 2, 3, 4, 5, 2, 1, 1, 5];

function checkDuplicates(array) {
  let itemsAlreadySeen = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // The indexOf method returns the position of the first occurrence. It returns -1 if there is no such value
    if (itemsAlreadySeen.indexOf(element) !== -1) {
      return true;
    } else {
      itemsAlreadySeen.push(element);
      return false;
    }
  }
}

checkDuplicates(array1);

// Method 2: This is a simpler and shorter method.

function checkDuplicate(array) {
  // We use set since it does not permit duplicates
  if (new Set(array).size !== array.length) {
    return true;
  }
  return false;
}

checkDuplicate(array1);
