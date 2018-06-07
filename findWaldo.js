



function findWaldo(arr, found) {

 arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
  }
 });


}

function actionWhenFound(index) {
  console.log("Found Waldo at Index " + index);
}

findWaldo(["Alice", "Bob", "Winston", "Waldo"], actionWhenFound);
// ["Alice", "Bob", "Winston", "Waldo"].forEach(findWaldo());



// var arr = [1, 2, 3, 4];

// arr.forEach(function(element) {
//   console.log(element);
// });
