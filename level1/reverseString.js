/*
 * Given a string, returns a new string that is the same as the original string with the order of its characters reversed.
 * You're not allowed to use String.prototype.reverse().
 * Returns the new string.
 */
function reverseString(tr) {
    // Step 1. Create an empty string that will host the new created string
    let newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}

describe('reverseString', function() {
  const assert = require("chai").assert;

  it('should work for empty string', function() {
    assert.equal(reverseString(""), "");
  });

  it('should work for single-character strings', function() {
    assert.equal(reverseString("a"), "a");
    assert.equal(reverseString(" "), " ");
    assert.equal(reverseString("*"), "*");
  });

  it('should work on non-trivial strings', function() {
    assert.equal(reverseString("cba"), "abc");
    assert.equal(reverseString("foobar"), "raboof");
    assert.equal(reverseString("otatop"), "potato");
    assert.equal(reverseString("foof"), "foof");
  });
});