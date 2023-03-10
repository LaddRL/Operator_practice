let id = 0;
let firstName = "Jonny";
let lastName = "BeGood";
let firstName2 = "Bob"
let lastName2 = "Sagget"

// CREATE A FUNCTION THAT CREATES A NEW ID AND PLACES FIRST NAME AND LAST NAME TOGETHER
// PA - parameters at the declaration - arguments at the invocation
function createId(firstName, lastName){
    console.log("with concatination " + firstName + " " + lastName);
    console.log(`with template literals: ${firstName} ${lastName}`);
    console.log(++id);
}

createId( firstName, lastName);
createId(firstName2, lastName2)