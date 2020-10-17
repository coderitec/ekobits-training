/** What is the value of the keyword this in the following example: */

var data = this;
console.log(data);

/**ANSWER */

/**Window {0: global, 1: global, window: 
 * Window, self: Window, document: document, name: "", 
 * location: Location, …} */

 /** What does this function output? Why? */
 function logThis(){
    return this;
 }

logThis();  

/**ANSWER: THIS GIVES US THE SAME AS THE PREVIOUS  */

/**Window {0: global, 1: global, window: 
 * Window, self: Window, document: document, name: "", 
 * location: Location, …} */

// What does this function output? Why?

var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi()

/** ANSWER */

/** Hello! Tim */