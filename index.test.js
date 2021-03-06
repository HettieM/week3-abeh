// This function simulates adding li to the DOM
function addListItemToDom(list) {
  list.forEach(inputValueInList => {
    toDoInput.value = inputValueInList;
    submit.click();
    toDoInput.value = "";
  })  
}

function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
 }
 

// Test suite 1 - Check the input values render correctly on the webpage
test("Check that input value correctly renders on the webpage", t => {
  checkArrayValue(['Cheese', 'Ham', 'Fish', 'Potatoes'], t);
  checkArrayValue(['Cheese', 'Ham', 'Fish', 'Potatoes', 'Cheese', 'Ham', 'Fish', 'Potatoes'], t);
});

function checkArrayValue (array, test) {
  addListItemToDom(array);  
  let index = randomIndex(array.length);
  const newList = document.querySelectorAll('.listContainer__list-item');
  const arrayResult = Array.from(newList);  
  const result = arrayResult[index].firstElementChild.textContent; 
  const expected = array[index];
  test.equal(result, expected, `List item at index ${index} expected to be ${expected} and it was ${result}`);
  let liNodes = document.querySelectorAll('li'); // This selects all of the li on the webpage
  liNodes.forEach(node => node.remove()); // This deletes all of the li on the webpage
}


// Test suite 2 - Check the to do list length renders correctly on the webpage
test("Check that multiple user inputs correctly render on the webpage", t => {
  checkArrayLength(['Cheese', 'Ham', 'Fish', 'Potatoes'], t);
  checkArrayLength(['Cheese', 'Ham', 'Fish', 'Potatoes', 'Fish', 'Potatoes', 'Steak'], t);
});

function checkArrayLength (array, test) {
  addListItemToDom(array);
  let liNodes = document.querySelectorAll('li');
  const result = liNodes.length;
  const expected = array.length;
  test.equal(result, expected, `List length expected to be ${expected} and it was ${result}`);
  liNodes.forEach(node => node.remove());
}


//Test Suite 3 - Check that clicking a delete button reduces the list length by one.
test("Check that the list length decreases when the delete button is selected", t => {
  checkListLength(['Cheese', 'Ham', 'Fish', 'Potatoes'], t);
  checkListLength(['Cheese', 'Ham', 'Fish', 'Potatoes', 'Fish', 'Potatoes', 'Steak'], t)
})

function checkListLength(array, test) {
  addListItemToDom(array);
  let index = randomIndex(array.length);
  let liNodes = document.querySelectorAll('li');
  const firstList = document.querySelectorAll('.listContainer__list-item');
  const arrayResult = Array.from(firstList); 
  arrayResult[index].lastElementChild.click();
  const secondList = document.querySelectorAll('.listContainer__list-item');
  const secondArray = Array.from(secondList);
  const result = secondArray.length;  
  const expected = array.length-1;
  test.equal(result, expected, `List length expected to decrease from ${array.length} to ${expected}. List length is ${result}`);
  liNodes.forEach(node => node.remove());
}

// Test Suite 4 - Check the delete button removes the indexed list item from the list and the index now relates to the next item in line.
test("Check that the delete button removes the selected element", t => {
  correctElementDeleted(['Cheese', 'Ham', 'Fish', 'Potatoes'], t);
})

function correctElementDeleted(array, test) {
  addListItemToDom(array);
  let index = randomIndex(array.length);
  let liNodes = document.querySelectorAll('li');
  const newList = document.querySelectorAll('.listContainer__list-item');
  const arrayResult = Array.from(newList);
  arrayResult[index].lastElementChild.click();
  const secondList = document.querySelectorAll('.listContainer__list-item');
  const secondArray = Array.from(secondList);
  const result =  secondArray[index].children[0].textContent
  const expected = arrayResult[index+1].children[0].textContent;
  test.equal(result, expected, `List item ${result} expected to equal list item ${expected}`)
  liNodes.forEach(node => node.remove());
}

// Test Suite 5 - Check the checked button adds a class to the clicked list item
test("Check the checked function can add a class to the list item", t =>{
  classListAdded(['Cheese', 'Ham', 'Fish', 'Potatoes'], t)
})

function classListAdded(array, test){
  addListItemToDom(array);
  let index = randomIndex(array.length)
  let liNodes = document.querySelectorAll('li');
  const listItem = document.querySelectorAll('.listContainer__list-item');
  const listArray = Array.from(listItem);
  let labelOfIndex = listArray[index].children[0]
  labelOfIndex.click()
  const result = labelOfIndex.classList.contains('checked')
  const expected = true
  test.equal(result, expected, `Class list check status ${result} should be ${expected}`)
  liNodes.forEach(node => node.remove());

}

  



// This test can only check one value in one array each time
// test("Check that input value correctly renders on the webpage", t => {
//   addListItemToDom(['Walk my cat']);
//   const firstListItemText = document.querySelector('.itemCheckboxLabel').textContent;
//   t.equal(firstListItemText, "Walk my cat");
//   toDoInput.value = "";
//   const firstListItem = document.querySelector('.listContainer__list-item')
//   firstListItem.remove();
// });

// This test can only check one array.length in one array each time
// test("Check that multiple user inputs correctly render on the webpage", t => {
//   addListItemToDom(['Cheese', 'Ham', 'Fish', 'Potatoes']);
//   let liNodes = document.querySelectorAll('li');
//   const result = document.querySelectorAll('li').length;
//   const expected = 4;
//   t.equal(result, expected, `List length expected to be ${expected} and it was ${result}`);
//   liNodes.forEach(node => node.remove());
// });













// Old test function that was limited to only testing one array at a time.
// test("Check that multiple user inputs correctly render on the webpage", t => {
//   addListItemToDom(['Cheese', 'Ham', 'Fish', 'Potatoes']);
//   const liNodes = document.querySelectorAll('li');
//   const result = liNodes.length;
//   const expected = 4;
//   t.equal(result, expected, `List length expected to be ${expected} and it was ${result}`);
//   liNodes.forEach(node => node.remove());
// });
















// function checkLengthArr()

// test("Submitting a new task adds it to the list", t => {
  // User writes something in input
  // User clicks submit button
  // JS takes the input value
  // JS creates a template with a li, span, input, button
  // DOM manipulation li is appended to ul parent
// });   

// Integration test for calculator
// test("Uppercase feature correctly changes the user's input and updates the page", t => {
//   const input = document.querySelector("input"); // step 1
//   input.value = "hello world"; // step 2
//   const submitButton = document.querySelector("button[type='submit']");
//   submitButton.click(); // step 3
//   const result = document.querySelector("#result");
//   t.equal(result.textContent, "HELLO WORLD"); // step 4
//   result.textContent = ""; // reset so it doesn't affect the page/other tests
// });


