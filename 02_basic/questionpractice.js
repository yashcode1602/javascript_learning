//string question
//1 reverse a string

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

 //2 Count Vowels in a String
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("JavaScript")); // Output: 3
//3 Check if a String is a Palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("Madam")); // Output: true

//Capitalize First Letter of Each Word
function capitalizeWords(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"
//5 Find the Longest Word in a String
function longestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
}
console.log(longestWord("I love programming in JavaScript")); // Output: "programming"

//ARRAY QUESTION

// 1 question Find Maximum Number

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([10, 20, 5, 99])); // Output: 99

// 2 Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

// 3 Sum of Array Elements

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3])); // Output: 6

// 4 Find the Index of an Element
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4])); // Output: [2, 4]

// 5 Merge Two Arrays Without Duplicates
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeArrays([1, 2], [2, 3])); // Output: [1, 2, 3]

// mixed question functions

// 1 Find Words Containing a Character
function findWordsWithChar(words, char) {
    return words.filter(word => word.includes(char));
}
console.log(findWordsWithChar(["apple", "banana", "cherry"], "a")); // Output: ["apple", "banana"]

// 2 Count Character Occurrences
function countOccurrences(str, char) {
    return str.split(char).length - 1;
}
console.log(countOccurrences("banana", "a")); // Output: 3

// 3 Word Lengths
function wordLengths(sentence) {
    return sentence.split(" ").map(word => word.length);
}
console.log(wordLengths("I love JS")); // Output: [1, 4, 2]

// 4 Convert Array to String

function arrayToString(arr) {
    return arr.join(", ");
}
console.log(arrayToString(["red", "green", "blue"])); // Output: "red, green, blue"

// 5. Sort Array by String Length

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["apple", "kiwi", "banana"])); // Output: ["kiwi", "apple", "banana"]
