var name = "Peter";
console.log(name);

var secondName = name;
console.log(secondName);

name = "Moses";
console.log(secondName);
console.log(name);


var person = {
    age: 29,
    name: "Francis",
    hobby: ['Sport', 'Reading']
}

// even if we have objects with the same SVGTextContentElement, the browser does not create the same pointer but different pointers for each obj 
var thirdPerson = {
    age: 29,
    name: "Francis",
    hobby: ['Sport', 'Reading']
}

console.log(person);

// here we create a new obj and merge it
// obj assign does not create a new obj so it just asssigns to the copied obj and therefore points to the same address 
var secondPerson = Object.assign({}, person);
console.log('After the assignment');
console.log(secondPerson);



//this creates a real array and not just a pointer
console.log('printing my hobbies before pushing running');
var myHobies = person.hobby.slice();

person.name = "Chishimba",
person.hobby.push('Running');

//the second person here outputs the pushed values since arrays are also ref types and it outputs the new name and the added hobby
console.log('after editing the first element');
console.log(secondPerson);
console.log(person);



console.log('returning a new object burt different content and address');
console.log(thirdPerson);


console.log('printing my hobbies');
console.log(myHobies);
