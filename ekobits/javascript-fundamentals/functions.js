// difference

function difference(num1, num2){
    return num1-num2;
}
console.log(difference(3, 7));

// product

function product(num1, num2){
    return num1*num2;
}
console.log(product(3, 7));

//prints the day

function printDay(day){
    switch(day){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
         case 3:
            console.log('Wednesday');
            break; 
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;    
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
            
        default:
            console.log(undefined);    
    }
}
console.log(printDay(4));