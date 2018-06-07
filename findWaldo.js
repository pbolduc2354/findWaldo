function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found([i]);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at Index " + index);
}

findWaldo(["Alice", "Bob", "Winston", "Waldo"], actionWhenFound);

