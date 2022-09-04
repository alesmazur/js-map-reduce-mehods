// let us get temp in C
const temp = [20, 16, 30, 41, 27, 20, 19];
// to turn temp in F we will use next formula F = 1,8*C + 32
// to do this we can use map method for arrays

const tF = temp.map((tC) => 32 + 1.8 * tC);

console.log(tF);

// let use Reduce method
const people = [
  { name: "Alex", age: 32, city: "Bialystok" },
  { name: "Anna", age: 35, city: "Bursa" },
  { name: "Alex", age: 38, city: "Portland" },
  { name: "Ira", age: 56, city: "Ciprus" },
  { name: "Nina", age: 62, city: "Klecl" },
];

let ageCount = 0;
// first let us use for loop
for (let index = 0; index < people.length; index++) {
  ageCount += people[index].age;
}
console.log(ageCount);
// reduce
newAgeCount = people.reduce((accum, element) => accum + element.age, 0);
console.log(newAgeCount);
