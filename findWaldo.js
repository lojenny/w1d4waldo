// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, i, array){
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index", i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);