// ============================================
// 1. Variable Scope: let, const, var
// ============================================

function demonstrateScope() {
    let output = '<strong>Variable Scope Differences:</strong><br><br>';
    
    // var - function scoped
    var varVariable = 'var is function-scoped';
    
    // let - block scoped
    let letVariable = 'let is block-scoped';
    
    // const - block scoped and immutable
    const constVariable = 'const is block-scoped and immutable';
    
    output += '<strong>Global declarations:</strong><br>';
    output += `var: ${varVariable}<br>`;
    output += `let: ${letVariable}<br>`;
    output += `const: ${constVariable}<br><br>`;
    
    // Demonstrating block scope
    if (true) {
        var varInBlock = 'var accessible outside block';
        let letInBlock = 'let only in block';
        const constInBlock = 'const only in block';
    }
    
    output += '<strong>After block scope:</strong><br>';
    output += `var from block: ${varInBlock} ✓<br>`;
    output += `let from block: undefined (not accessible) ✗<br>`;
    output += `const from block: undefined (not accessible) ✗<br><br>`;
    
    output += '<strong>Key Differences:</strong><br>';
    output += '• <strong>var</strong>: Function-scoped, can be redeclared, hoisted<br>';
    output += '• <strong>let</strong>: Block-scoped, cannot be redeclared, not hoisted<br>';
    output += '• <strong>const</strong>: Block-scoped, cannot be redeclared or reassigned, not hoisted';
    
    document.getElementById('scope-output').innerHTML = output;
}

// ============================================
// 2. Array Access - Get Second Fruit
// ============================================

const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry'];

function getSecondFruit(arr) {
    return arr[1]; // Arrays are 0-indexed, so index 1 is the second element
}

function showSecondFruit() {
    const secondFruit = getSecondFruit(fruits);
    const output = `
        <strong>Fruits Array:</strong> ${JSON.stringify(fruits)}<br><br>
        <strong>Second Fruit:</strong> ${secondFruit}
    `;
    document.getElementById('fruit-output').innerHTML = output;
}

// ============================================
// 3. Push and Pop Operations
// ============================================

function modifyArray(arr) {
    const newArr = [...arr]; // Create a copy to avoid modifying original
    
    // Add element to end
    newArr.push('New Element');
    
    // Remove last element
    newArr.pop();
    
    return newArr;
}

function demonstratePushPop() {
    const originalArray = ['First', 'Second', 'Third'];
    const modifiedArray = modifyArray(originalArray);
    
    const output = `
        <strong>Original Array:</strong> ${JSON.stringify(originalArray)}<br><br>
        <strong>After push('New Element'):</strong> ['First', 'Second', 'Third', 'New Element']<br><br>
        <strong>After pop():</strong> ${JSON.stringify(modifiedArray)}<br><br>
        <strong>Result:</strong> Array remains unchanged (added then removed)
    `;
    document.getElementById('pushpop-output').innerHTML = output;
}

// ============================================
// 4. Map Method - Square Numbers
// ============================================

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

function demonstrateMap() {
    const numbers = [1, 2, 3, 4, 5];
    const squared = squareNumbers(numbers);
    
    const output = `
        <strong>Original Array:</strong> ${JSON.stringify(numbers)}<br><br>
        <strong>Squared Array:</strong> ${JSON.stringify(squared)}<br><br>
        <strong>Explanation:</strong> map() creates a new array by applying a function to each element
    `;
    document.getElementById('map-output').innerHTML = output;
}

// ============================================
// 5. Filter Method - Odd Numbers
// ============================================

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function demonstrateFilter() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = filterOddNumbers(numbers);
    
    const output = `
        <strong>Original Array:</strong> ${JSON.stringify(numbers)}<br><br>
        <strong>Odd Numbers Only:</strong> ${JSON.stringify(oddNumbers)}<br><br>
        <strong>Explanation:</strong> filter() creates a new array with elements that pass the test (num % 2 !== 0)
    `;
    document.getElementById('filter-output').innerHTML = output;
}

// ============================================
// 6. Object Properties - Person Greeting
// ============================================

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};

function greetPerson(personObj) {
    const greeting = `Hello! My name is ${personObj.name}, I am ${personObj.age} years old, and I work as a ${personObj.occupation}.`;
    console.log(greeting);
    return greeting;
}

function showPersonGreeting() {
    const greeting = greetPerson(person);
    const output = `
        <strong>Person Object:</strong><br>
        ${JSON.stringify(person, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}<br><br>
        <strong>Greeting:</strong><br>
        ${greeting}
    `;
    document.getElementById('person-output').innerHTML = output;
}

// ============================================
// 7. Calculate Rectangle Area
// ============================================

function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}

function calculateArea() {
    const rectangle = { width: 10, height: 5 };
    const area = calculateRectangleArea(rectangle);
    
    const output = `
        <strong>Rectangle Object:</strong> ${JSON.stringify(rectangle)}<br><br>
        <strong>Area Calculation:</strong> ${rectangle.width} × ${rectangle.height} = ${area}<br><br>
        <strong>Result:</strong> ${area} square units
    `;
    document.getElementById('area-output').innerHTML = output;
}

// ============================================
// 8. Object Keys
// ============================================

function getObjectKeys(obj) {
    return Object.keys(obj);
}

function showObjectKeys() {
    const sampleObject = {
        name: 'Laptop',
        brand: 'Dell',
        price: 999,
        inStock: true,
        color: 'Silver'
    };
    
    const keys = getObjectKeys(sampleObject);
    
    const output = `
        <strong>Sample Object:</strong><br>
        ${JSON.stringify(sampleObject, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}<br><br>
        <strong>Object Keys:</strong> ${JSON.stringify(keys)}<br><br>
        <strong>Explanation:</strong> Object.keys() returns an array of the object's property names
    `;
    document.getElementById('keys-output').innerHTML = output;
}

// ============================================
// 9. Merge Objects
// ============================================

function mergeTwoObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

function mergeObjects() {
    const object1 = { name: 'Alice', age: 25 };
    const object2 = { occupation: 'Designer', city: 'New York' };
    const merged = mergeTwoObjects(object1, object2);
    
    const output = `
        <strong>Object 1:</strong> ${JSON.stringify(object1)}<br><br>
        <strong>Object 2:</strong> ${JSON.stringify(object2)}<br><br>
        <strong>Merged Object:</strong> ${JSON.stringify(merged)}<br><br>
        <strong>Explanation:</strong> Object.assign() copies properties from source objects to a target object
    `;
    document.getElementById('merge-output').innerHTML = output;
}

// ============================================
// 10. Reduce Method - Sum Array
// ============================================

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function calculateSum() {
    const numbers = [10, 20, 30, 40, 50];
    const sum = sumArray(numbers);
    
    const output = `
        <strong>Numbers Array:</strong> ${JSON.stringify(numbers)}<br><br>
        <strong>Sum Calculation:</strong><br>
        10 + 20 + 30 + 40 + 50 = ${sum}<br><br>
        <strong>Result:</strong> ${sum}<br><br>
        <strong>Explanation:</strong> reduce() executes a reducer function on each element, resulting in a single output value
    `;
    document.getElementById('reduce-output').innerHTML = output;
}
