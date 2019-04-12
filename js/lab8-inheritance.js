// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
//     Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"

String.prototype.filter = function (arr) {
    let str = this;
    arr.forEach(function (word) {
        str = str.replace(word, "");
    });
    return str;
};
console.log("This house is not nice!");
console.log("This house is not nice!".filter(["not", "house"]));

console.log("\n");
// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
//     Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]
Array.prototype.bubbleSort = function () {
    return this.sort();
};
console.log([6,4,0, 3,-2,1]);
console.log([6,4,0, 3,-2,1].bubbleSort());

console.log("\n");
// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
//     is now teaching [subject]. Create a Teacher object and call its teach method.
//         Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.
function Person(newName) {
    this.name = newName;
    this.setName = function (setName) {
        this.name = setName;
    }
}

const Teacher = new Person("Tina");
Teacher.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
};
Teacher.teach("WAP");
const myTeacher = Object.create(Teacher);
myTeacher.setName("John");
myTeacher.teach("WAA");
//=============================================================
const makePerson = function (newName) {
    let name = newName;
    return {
        name : function () {
            return name;
        },
        setName : function (setName) {
            name = setName;
        }
    };
};

const professor = Object.create(makePerson("Tina"));
professor.teach = function (subject) {
    console.log(this.name() + " is now teaching " + subject);
};
professor.teach("MWA");
professor.setName("Saad");
professor.teach("MWA");

// Exercise 4:
// Write code that will create person, student, and professor objects.
// • Person objects have
// o name and age fields
// o a greeting method that prints out: “Greetings, my name is [name] and I am
//     [age] years old.”
// o a salute method that prints out: “Good morning!, and in case I dont see you,
//     good afternoon, good evening and good night!”
// • Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
//     [name] and I am studying [major]. The greeting should be output to the console.
// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
//     my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.

function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
    };
    this.salute = function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
    };
    this.setParams = function (newName, newAge) {
        this.name = newName;
        this.age = newAge;
    }
}

const Student = new Person2("Jack", 29);
Student.major = "Web Programming";
Student.greeting = function () {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
};
const Professor = new Person2();
Professor.department = "CS";
Professor.greeting = function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department");
};
const tina = Object.create(Professor);
tina.setParams("Tina", 30);
tina.greeting();
const john = Object.create(Student);
john.setParams("John", 20);
john.greeting();




