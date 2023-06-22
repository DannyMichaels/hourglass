
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    // const hourglasses = getHourglasses(arr)
    // const sums = hourglasses.map(h => h.reduce((ac,cv) => ac + cv));
    // const highestSum = sums.sort((a,b) => b - a)[0]
    // return highestSum;
    return getHourglassSums(arr).sort((a,b) => b - a)[0]
}


    //6 by 6 array
function getHourglasses(array) {
    
  let hourglasses = []; // creating an empty array to store the hourglasses
  for (let i = 0; i < 4; i++) { // looping through each row in the array, except for the last two
    for (let j = 0; j < 4; j++) { // looping through each column in the array, except for the last two
      let hourglass = [ // creating a new hourglass array for the current position in the loop
        array[i][j], // top left
        array[i][j + 1], // top center
        array[i][j + 2], // top right
        array[i + 1][j + 1], // middle center
        array[i + 2][j], // bottom left
        array[i + 2][j + 1], // bottom center
        array[i + 2][j + 2] // bottom right
      ];
      hourglasses.push(hourglass); // adding the hourglass array to the list of hourglasses
    }
  }
  return hourglasses; // returning the list of all hourglasses
}

function getHourglassSums(array) {
  let sums = []; // creating an empty array to store the sums
  for (let i = 0; i < 4; i++) { // looping through each row in the array, except for the last two
    for (let j = 0; j < 4; j++) { // looping through each column in the array, except for the last two
      let sum = array[i][j] + array[i][j + 1] + array[i][j + 2] // calculating the sum of the hourglass
          + array[i + 1][j + 1] // adding the middle value of the hourglass
          + array[i + 2][j] + array[i + 2][j + 1] + array[i + 2][j + 2];
      sums.push(sum); // adding the sum to the list of sums
    }
  }
  return sums; // returning the list of all sums
}


let arr = [
  [0, 4, 3, 2, 5, 6],
  [9, 1, 5, 3, 4, 7],
  [8, 2, 6, 7, 1, 0],
  [5, 4, 3, 2, 1, 9],
  [9, 8, 7, 6, 5, 4],
  [0, 1, 2, 3, 4, 5]
];

hourglassSum(arr)
