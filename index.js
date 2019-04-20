const destroyer = (arr, ...rest) => {
  // Remove all the values
  let filteredArr = arr.filter(item => !rest.includes(item))
  return filteredArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
