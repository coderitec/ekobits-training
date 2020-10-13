let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
/**QUESTION 1
 * Write the command to add the language "Go" to the end of the languages array.
 */
programming.languages.push('Go');
console.log(programming.languages);

/**QUESTION 2
 * Change the difficulty to the value of 7.
 */
programming.difficulty = 7;
console.log(programming.difficulty);

/**QUESTION 3
 * Using the delete keyword, write the command to remove the jokes key from the programming object.
 */
delete  programming.jokes;
console.log(programming.hasOwnProperty('jokes')); //output false to the console

/**QUESTION 4
 * Write the command to add a new key called isFun and a value of true to the programming object.
 */

 programming['isFun'] = true;
 console.log(programming);

 /**QUESTION 5
  * Using a loop, iterate through the languages array and console.log all of the languages.
  */
 let lang = programming.languages;
 for (const each of lang) {
     console.log(each);
 }

 /**QUESTION 6
  * Using a loop, console.log all of the keys in the programming object.
  */
console.log(Object.keys(programming));

/**QUESTION 7
 * Using a loop, console.log all of the values in the programming object.
 */
console.log(Object.values(programming));