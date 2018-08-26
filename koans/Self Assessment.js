var each = function(collection, callback) {
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      callback(collection[key], key, collection)
    }
  }
};

/*
Issues with 'each'
1) 
2) iterator should be callback in the else statement
3) array is an object and should have used Array.isArray
etc.. <add more numbers as needed>
*/


// Write a function addRandomAgeInclusive that takes in a name string, or an object with a name property, and two numbers. This function should generate a random number within the range of the two input numbers, and return an object with an added age property along with the randomly generated number.

// Edge cases to consider:

// If input object does not have a name property, return original object.
// If 2nd input is larger than 3rd input, return original first argument.
// Example:

//input: str or object with two numbers
//output object - with age property of random
//if input does not have property, return object

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * ( max - min + 1) + min);
}

//console.log(randomIntFromInterval(30,40))

function addRandomAgeInclusive (ObjOrStr, minAge, maxAge) {
//declare obj var;
let output = {};

if (minAge > maxAge) {
  return ObjOrStr;
}

let age = randomIntFromInterval(minAge,maxAge)

if (typeof ObjOrStr === 'object'){
  if(!ObjOrStr.hasOwnProperty('name')){
    return ObjOrStr
  }
  ObjOrStr.age = age;
  return ObjOrStr
} else {
  output.name = ObjOrStr;
  output.age = age
}
return output
} 

// test if the 1st is a string  then run a for loop, if it is an object, run a for in loop.
//create function for to get random number
//add that age to the object
//return the object


 console.log(addRandomAgeInclusive('Mayor', 20, 25)); // { name: 'Mayor', age: 25 }
 console.log(addRandomAgeInclusive({ name: 'Sean', id: 10330293 }, 30, 40)); // { name: 'Sean', id: 10330293, age: 39 }
 //addRandomAgeInclusive({ firstName: 'Trish' }, 30, 40); // { firstName: 'Trish' }
 //addRandomAgeInclusive('Kai', 20, 18); // 'Kai'


// Part 3
// Write a function assignGroup that takes a name string or an object, and returns an object with an added group property. A student must be randomly placed in group 'A', 'B', 'C', or 'D'.

function getRandomGroup(array) {
  return array[Math.floor((Math.random()*array.length))];
} 
//console.log(getRandomGroup(['A','B','C','D']))

function assignGroup (strOrObject) {
let output = {};
let randomGroup = ['A','B','C','D']
  //create helper function for group
  if (typeof strOrObject === 'string') {
    output.name = strOrObject;
    output.group = getRandomGroup(randomGroup)
  } else if (typeof strOrObject === 'object') {
      if(strOrObject.hasOwnProperty('group')) return strOrObject
    output = strOrObject
    output.group = getRandomGroup(randomGroup)
  }
  //if the string is string, then add a name property and the string as its value
  //if the parameter is an object, then add that to its value

return output;
}


//assignGroup('Harold'); // { name: 'Harold', group: 'B' }
//assignGroup({ name: 'Kyla', group: 'Z'})); // { name: 'Kyla', group: 'C' }
console.log(assignGroup('Cynthia')); // { name: 'Cynthia', group: 'B' }
// Edge cases required for consideration:

// If the input object has already been assigned a group, do not overwrite its value.


//For the following sections, you must use the corrected each function from Part 1. If your implementation of each does not work properly, use a native Array method (forEach, map, filter, reduce, etc) of your choice

/************Part 4************** */
var students = ["Lula", "Marla", "Isa", "Geoff", "Cassie", "Ana", "Kayla", "Mark", "Katja", "Kelly", "John", "Megan"]

// Part 4
// Write a function addAges that takes in an array of students and two numbers. This function should return a new array with a random number within the two input numbers (inclusive) added as an age property to each element.

function addAges (array, num1, num2){
 return array.map(function(student){
   return {name: student, age: randomIntFromInterval(num1,num2)}
 })
}

console.log(addAges(students, 12, 15)); // {name: 'Lula', age: 15}


// Write a function groupAllStudents that takes in an array of students, and returns a new array with object elements. Each object will contain the respective student's name and a group.


 groupAllStudents(students)[0]; // {name: 'Lula', group: 'C'} 

function groupAllStudents (arr) {
  let randomGroup = ['A','B','C','D'] 
  return arr.map(function(student){
    return {name : student, group: getRandomGroup(randomGroup)}
  })
}

groupAllStudents(students);

/***********Part 6******** */

// Part 6
// Create a new array studentListWithAgesAndGroups that's a result of calling Part 4 and Part 5 on the students array.

// Write a function filterByAgeAndGroup which takes in an array like studentListWithAgesAndGroups, an age, and a group letter, and returns a list of students' names whose information matches the target age and group.
var arr =
[ { name: 'Lula', group: 'A', age: 12 },
  { name: 'Marla', group: 'A', age : 13 },
  { name: 'Isa', group: 'D' },
  { name: 'Geoff', group: 'D', age: 13 },
  { name: 'Cassie', group: 'C' },
  { name: 'Ana', group: 'C' },
  { name: 'Kayla', group: 'D' },
  { name: 'Mark', group: 'B' },
  { name: 'Katja', group: 'B' },
  { name: 'Kelly', group: 'D' },
  { name: 'John', group: 'B' },
  { name: 'Megan', group: 'C' } ]

function createStudentListWithAgesAndGroups (arr, minAge, maxAge){

  var studentWithAges = addAges(arr, minAge, maxAge)
  var studentsWithGroup = groupAllStudents(arr);

  return arr.map(function(student, i){
    
    return {name: student, age : studentWithAges[i].age, group: studentsWithGroup[i].group}
  })
}

createStudentListWithAgesAndGroups(students,21,30)

function filterByAgeAndGroup(arr, age, group) {
  return arr.filter(function(student){
    return student.group === group && student.age === age
  })

}

//filterByAgeAndGroup(arr, 13, 'D')