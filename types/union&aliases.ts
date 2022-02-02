type ID = number | string
//A union is a type formed by two types or more
function printId(id: ID) {
  console.log(`Your ID is ${id}`);
}
printId(1)// Your ID is 1
printId('1')// Your ID is 1

//when use the same type more than once, use a refer by alias
function printInfo(id: ID, item: string) {
  console.log(`A product ${item} has ID: ${id}`)
}