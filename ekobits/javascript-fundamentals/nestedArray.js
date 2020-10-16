// Write a function called rotate which takes an array and a number,
//  and moves each element however many spaces the number is to the right. 
//  For the value at the end of the array,
//  rotate should move it back to the beginning.


function rotate(array, num){
    //make a copy of the array
    //loop through the array
    //we will pop the last index of the array and satore it in a variable
    //we will use unshift to put the popped array at the front
    //return the array

    let arrayCopy = array.slice();
    let ki = 0;
    for(; ki < num ;){
        ki++;
        
        arrayCopy.unshift(arrayCopy.pop());
    }

    return arrayCopy;
}

rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]


/**MakeXoGrid function */

function makeXOGrid(rows, columns){
    // declare a string initialized to 'XO'
    // initialize an empty array
      // initialize another empty array
      // loop through the string
      // push value to the of equating to the number of columns to the first array
      // push the first array to the second column equating the number of rows
      let grid = "XO";
      grid = grid.split("");
      let firstArray = [];
      let secondArray = [];

      for(let je = 0; je < rows; je++){

           for(let ra =0; ra < columns; ra++){
               
             firstArray.push(grid[ra]) ;

            }
            secondArray.push(firstArray);

        }

        return secondArray;

}

makeXOGrid(2,3);