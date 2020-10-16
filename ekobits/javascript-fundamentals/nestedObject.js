let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  /**Using a for loop, console.log all of the numbers in the primeNumbers array. */
  for(let num of nestedData.innerData.numberData.primeNumbers){
      console.log(num);
  }

/**Using a for loop, console.log all of the even Fibonnaci numbers. */


  for(let num of nestedData.innerData.numberData.fibonnaci){
    if(num % 2 == 0){
        console.log(num);
    }
    
}

/**Console.log the value "second" inside the order array. */

console.log(nestedData.innerData.order[1]);

/**Invoke the addSnack function and add the snack "chocolate". */

nestedData.innerData.addSnack("chocolate");

/**Inside of the addSnack function there is a special keyword called this. 
 * What does the word this refer to inside the addSnack function? */

 // It points to the object within the scope