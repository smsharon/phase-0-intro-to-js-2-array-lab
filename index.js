// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//cats.push ('Ralph')
//const destructivelyAppendCat = [...cats, "Ralph"];
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
  }
  function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
  }
  function destructivelyRemoveLastCat(){
    cats.pop();
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();
  } 
  function prependCat(Arnold) {
    const newCats = [Arnold, ...cats];
    return newCats;
  }
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1);
    return newCats
 }
 function removeFirstCat(){
    const newCats = cats.slice(1);
  return newCats;
 }