const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}
function prependCat(name) {
    const newOfCats = [name , ...cats];
    return newOfCats;
}
function removeLastCat() {
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}
function removeFirstCat() {
    const newFirstCat = cats.slice(1);
    return newFirstCat;
}