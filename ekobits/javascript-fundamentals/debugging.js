/**What does the throw keyword do? */

function addIfEven(num){
    if(num % 2 == 0){
        return num + 5;
    }
    return num;
}
addIfEven(8); //13

for(let i=0; i < 5; i++){
    console.log(i);
}


function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}



function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i of numbers){
        if(i % 2 == 0) {
            evenNumbers.push(i);
        }
        
    }
    return evenNumbers;
}
displayEvenNumbers();