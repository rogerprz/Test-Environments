// console.log("Grid Line");
let title = document.getElementById("h1-title");
title.innerHTML = "Grid Line"
let gridArray = [
  [2, 4, 6, 8],
  [1, 3, 5, 7],
  [15,13,11,9],
  [16,14,12,10]
]

function singleGridLineArray(gridArray){
  let totalMoves = (gridArray.length * gridArray[0].length)
  console.log(totalMoves);
  let arrTotal = gridArray.length - 1
  let count = 0
  let xCoord = 0
  let yCoord = 0
  let direction = "E";
  let finalArray = []
  while (count !== totalMoves){
    if (direction === 'E'){
      let elemTotal = gridArray[0].length - 1
      finalArray.push(gridArray[yCoord][xCoord])

      // debugger
      if (xCoord === elemTotal ){
        gridArray.shift();
        arrTotal--
        xCoord--
        direction = gridDirection(direction)

      }
      xCoord++

    }
    else if (direction === 'S') {
      // let elemTotal = gridArray[0].length - 1
      let arrTotal = gridArray.length - 1
      // console.log("FINAL: ",finalArray);
      // console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
      // console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
      // console.log("GRID: ",gridArray);
      // debugger
      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].pop();
      yCoord++
      if (arrTotal === yCoord - 1){

        // finalArray.push(gridArray[yCoord][xCoord])
        xCoord--
        yCoord--
        // gridArray[yCoord].pop();
        // debugger
        direction = gridDirection(direction)
      }
    }
    else if (direction === "W") {
      let elemTotal = gridArray[0].length - 1

      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].pop();
      if (xCoord === 0){
        gridArray.pop();
        direction = gridDirection(direction)
        yCoord--
        xCoord++
      }
      xCoord--
    }
    else if (direction === "N") {
      let elemTotal = gridArray[0].length - 1
      finalArray.push(gridArray[yCoord][xCoord])
      gridArray[yCoord].shift()
      if (yCoord === 0){

        // finalArray.push(gridArray[yCoord][xCoord])
        // gridArray[yCoord].shift()
        direction = gridDirection(direction)
        yCoord++
        // console.log("FINAL: ",finalArray);
        // console.log('arrTotal :',arrTotal,'elemTotal : ',elemTotal );
        // console.log("yCoord   : ", yCoord," xCoord  :",xCoord);
        // console.log("GRID: ",gridArray);
        // debugger
      }
      yCoord--

    }

    if (count === 10) {console.log("COUNT", count);}
    count++
  }
  debugger
  console.log("FINAL",finalArray);

}

singleGridLineArray(gridArray)

function gridDirection(direction) {
  switch (direction) {
    case "N":
      return direction = "E"
    case "E":
      return direction = "S";
    case "S":
      return direction = "W"
    case "W":
      return direction = "N"
    default:
      break
  }
}

// [16,14,12,10]
// [15,13,11,9],
// [1,3,5,7],
// [2,4,6,8],

// Determine size of grid array 3
// Determine size of sub-array 4
// if goin from left to right remove elem and add to finalArray
// if we reach end of current array move to next direction.
// i.e south, west, north, east
// after switching direction push elem to new array
