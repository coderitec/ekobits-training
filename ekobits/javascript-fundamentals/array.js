let people = ["Greg", "Mary", "Devon", "James"];

/**QUESTION 1
 * Using a loop, iterate through this array and console.log all of the people.
 */
let person  = "";
for (person of people) {
    console.log(person);
}

/**QUESTION 2
 * Write the command to remove "Greg" from the array.
 */

people.shift();
console.log(people);

/**QUESTION 3
 * Write the command to remove "James" from the array.
 */
people.pop();
console.log(people);

/**QUESTION 4
 * Write the command to add "Matt" to the front of the array.
 */
people.unshift('Matt');
console.log(people);

/**QUESTION 5
 * Write the command to add your name to the end of the array.
 */
people.push('Francis');
console.log(people);

/**QUESTION 6
 * Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
 */
let names = people;
for (const name of names) {
    console.log(name);
    if (name == 'Mary') {
        break;
    }
}

/**QUESTION 7
 * Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
 */
let fromPeople = people.slice(2,4);
console.log(fromPeople);

/**QUESTION 8
 * Write the command that gives the indexOf where "Mary" is located.
 */
console.log(people.indexOf('Mary'));

/**QUESTION 9
 * Write the command that gives the indexOf where "Foo" is located (this should return -1).
 */
console.log(people.indexOf('Foo'));

/**QUESTION 10
 * Redefine the people variable with the value you started with.
 *  Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
 * Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
 */
people.splice(2,1,"Elizabeth","Artie");
console.log(people);

/**QUESTION 11
 * Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
 */
let withBob = people.concat("Bob");
console.log(withBob);


