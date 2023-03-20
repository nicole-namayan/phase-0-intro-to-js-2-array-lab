// Write your solution here
const cats = ['Milo','Otis','Garfield']; {
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
   }
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
    return cats
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield)
    return cats
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
    return cats
}
 function appendCat(name) {
    const newcat=[...cats,name]
    return newcat
 }
function prependCat(name) {
    return [name,...cats];
}
function removeLastCat() {
    const cats3=cats.slice(0,-1)
    return cats3
}
function removeFirstCat() {
    const cats4=cats.slice(1)
    return cats4
}

}
