const marvel_heroes =["thor","hulk","ironman","captain america","black widow","spiderman"];
const dc_heroes =["superman","batman","flash"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
// output: ["thor", "hulk", "ironman", "captain america", "black widow", "spiderman", ["superman", "batman", "flash"]]
// adding dc_heroes array to marvel_heroes array

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);
// output: ["thor", "hulk", "ironman", "captain america", "black widow", "spiderman", "superman", "batman", "flash"]
// merging marvel_heroes and dc_heroes arrays using spread operator

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9[10, 11]]]
const real_another_array= another_array.flat(infinity);
console.log(real_another_array)
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(Array.isArray(marvel_heroes));
// output: true
// checking if marvel_heroes is an array
console.log(Array.from(marvel_heroes));
// output: ["thor", "hulk", "ironman", "captain america", "black widow", "spiderman"]
// converting marvel_heroes to an array using Array.from
console.log(Array.from({name: "marvel_heroes"}));
// output: [undefined]
// converting an object to an array using Array.from, which results in an array with undefined values
