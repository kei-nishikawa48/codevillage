const str = "abcdefghijklmnopqrstuvwxyz";
console.log(str.search("z"));

console.log(str.substr(10));
console.log(str.substr(10, 4));

console.log(str.charAt(15));

const array1 = ["1", "2", "3"];
const array2 = ["a", "b", "c"];
const array3 = array1.concat(array2);

const tuika = array3.concat(1, 2, 3);

console.log(tuika);

console.log(array1.join(","));
console.log(array3.reverse());

array3.forEach((a) => console.log(a));
