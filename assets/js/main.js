console.log('%c---------lev1_1: Array sort()---------', 'color:orange');
//JS Vertiefung ---lev1_1: Array sort()

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];  

languages.sort()
console.log(languages);

console.log('%c---------lev1_13: Arrays join()---------', 'color:orange');

// JS Vertiefung lev1_13: Arrays join()

let meinText1 = ["Hello", "World"]
console.log(meinText1);
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
// console.log(meinText2);
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join1 = meinText1.join();
console.log(join1);
let join2 = meinText1.join("");
console.log(join2);
let join3 = meinText1.join(" ");
console.log(join3);
let join4 = meinText1.join("+");
console.log(join4);


let join5 = meinText2.join();
console.log(join5);
let join6 = meinText2.join("");
console.log(join6);
let join7 = meinText2.join(" ");
console.log(join7);
let join8 = meinText2.join("+");
console.log(join8);

let join9 = meinText3.join();
console.log(join9);
let join10 = meinText3.join("");
console.log(join10);
let join11 = meinText3.join(" ");
console.log(join11);
let join12 = meinText3.join("+");
console.log(join12);

console.log('%c---------lev1_2: Array reverse()---------', 'color:orange');

// -----Übung lev1_2: Array reverse()

let languages1 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortierung2 = languages1.sort().reverse();
console.log(sortierung2);


console.log('%c---------llev2_2: sort() bigger numbers---------', 'color:orange');

// -----Übung lev2_2: sort() bigger numbers

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];


let sort1 = numArray2.sort((a, b) => a - b)
console.log(sort1);



console.log('%c---------llev3_1: Reverse Name, Words---------', 'color:orange');

// -----Übung lev3_1: Reverse Name, Words

let animalShelter = ['Hund', 'Katze', 'Maus']

animalShelter.forEach(animal => {
    console.log(animal.split(""));
    console.log(animal.split("").reverse());
    console.log(animal.split("").reverse().join(""));
})







