// // // Skeleton
function average(numbers) {
  // process array of numbers
 return sum(numbers)/ numbers.length
}

function sum(numbers) {
  return numbers.reduce((acc, cur) => {
    return acc += cur;
  })
}

function assertEquals (actual, expected, testName) {
  if (JSON.stringify(actual) === expected) {
    console.log('Passed')
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' '+ '\"but got\" ' + actual)
  }
}

assertEquals(average([1,3,5,6,7]), '4.5', "should return an average" )

// var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];


// function decorateClassListWithAges (array) {
//   let random = Math.floor(Math.random() * 2) +10;
//   let finalArr= [];
//   let classObj = {};
//    return array.map(function(name){
//      return {name: name, age: random}
//    })
// }

// console.log(decorateClassListWithAges(classList))

// var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// Write a function called “getElementsLessThan100AtProperty”.


var currentInventory = [ 
  {
     name: 'Brunello Cucinelli', 
     shoes: [ 
       {name: 'tasselled black low-top lace-up', price: 1000}, 
       {name: 'tasselled green low-top lace-up', price: 1100}, 
       {name: 'plain beige suede moccasin', price: 950}, 
       {name: 'plain olive suede moccasin', price: 1050} 
    ]

  }, { 
     name: 'Gucci', 
     shoes: [ 
        {name: 'red leather laced sneakers', price: 800}, 
        {name: 'black leather laced sneakers', price: 900} 
     ] 

  } 
]; 

function getShoeName(shoe) {
  return shoe.name
}

function getShoePrice(shoe) {
  return shoe.price
}

// function renderInventory(inventory) {
//  let flatList = [];
 
//   for (let i = 0; i < inventory.length; i++) {

//     var designer = inventory[i];
//     var designerName = designer.name;
//     var designerShoes = designer.shoes;

//     for(let j = 0; j < designerShoes.length; j++) {
//       var currentShoe = designerShoes[j];
//       var shoeName = getShoeName(currentShoe);
//       var shoePrice = getShoePrice(currentShoe);

//       flatList += designerName + ', '+ shoeName + ', '+ shoePrice;
//       flatList += "\n"
//     }
//   }
//   return flatList;
// }
//   console.log(renderInventory(currentInventory))

// function calculateAverage(designer) {
// let sum = 0;
//  for (let i = 0; i < designer.shoes.length; i++) {
//    sum += designer.shoes[i]
//  }
//  return sum/=designer.shoes[i].length
// }

// function findAverage(designer){
//   let sum = 0;
//   for (let i = 0; i < designer.length; i++) {
//     sum += designer[i].price;
//   }
//   let average = sum/designer.length;
//   return average;
// }

// function calculateAveragePricePerDesigner (inventory) {
//   let result = {designer :[]};
//   for (let i = 0; i < inventory.length; i++) {
    
//     let designerName = inventory[i].name;
//     let designerShoe = inventory[i].shoes;
//     let averagePrice = findAverage(designerShoe);

//     result.designer.push({name:inventory[i].name, averagePrice: findAverage(designerShoe)})
//   }
//   return result 
// }

// calculateAveragePricePerDesigner(currentInventory)

//var expected = { 'designers':[ { 'name': 'Brunello Cucinelli', 'averagePrice': 1025 }, { 'name': 'Gucci', 'averagePrice': 850 } ] };


function listAllBlackShoes(inventory) {
  //declare empty string
  //loop through the inventory array
  //look through the shoe array
  //use if statement to see if the word 'black'
  //add the designer to the string, name of the shoe and the averagePrice
  //return the empty string
  let result = '';
  for (let i = 0; i < inventory.length;i++) {
    let designer = inventory[i].name;
    let shoes = inventory[i].shoes;
      for (let j = 0; j < shoes.length; j++) {
        let shoeName = shoes[j].name;
        let shoePrice = shoes[j].price;
        if (shoeName.includes('black')) {
          result += designer + ', ' + shoeName + ', ' + shoePrice + '\n'
        }
    }
  }
  return result;
}

listAllBlackShoes(currentInventory)

// Brunello Cucinelli,tasselled black low-top lace-up,1000
// Gucci,black leather laced sneakers,900

function targetWordIndex (shoeArray, targetWord) {
  let result = 0;
  for (let i = 0; i < shoeArray.length; i++){
    if (shoeArray[i].includes(targetWord)) {
      result += i
    }
  }
  return result;
}

// function findLacedShoes (inventory) {
// let result = [];
// let myObj = {};
  
//   for (let i = 0; i < inventory.length; i++) {
//     for (let j = 0; j < inventory[i].shoes.length; j++) {
//       let shoes =inventory[i].shoes[j]
//       if (shoes.name.includes('lace')){
//         let target =targetWordIndex(shoes, 'lace')
//         myObj.nameWords = shoes;
//         myObj.targetWordIndex = target
//       }
//     }
//   }
//   result.push(myObj)
//   return result
// }

// console.log(findLacedShoes(currentInventory))

