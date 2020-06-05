# Working-with-else-if
working with else if statements  
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  //golfScore(4, 1) should return "Hole-in-one!"
  //golfScore(1, 1) should return "Hole-in-one!"
if (strokes == 1){
  return "Hole-in-one!";
  //golfScore(4, 2) should return "Eagle"
  //golfScore(5, 2) should return "Eagle"
}else if(strokes <= par - 2){
  return "Eagle";
//golfScore(4, 3) should return "Birdie"
}else if (strokes == par -1) {
  return "Birdie";
//golfScore(4, 4) should return "Par"
//golfScore(5, 5) should return "Par"
}else if (strokes == par) {
  return "Par";
//golfScore(4, 5) should return "Bogey"
}else if (strokes == par + 1) {
  return "Bogey";
//golfScore(4, 6) should return "Double Bogey"
}else if (strokes == par +2) {
  return "Double Bogey";
//golfScore(4, 7) should return "Go Home!"
//golfScore(5, 9) should return "Go Home!"
}else if (strokes >= par + 3) {
  return "Go Home!";
}
}

golfScore(5, 4);
