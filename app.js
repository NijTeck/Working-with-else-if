//# Working-with-else-if
//working with else if statements  

# Working-with-else-if
/*working with else if statements  

In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

## Strokes	    Return
1	              "Hole-in-one!"
<= par - 2	     "Eagle"
par - 1	          "Birdie"
par	               "Par"
par + 1      	      "Bogey"
par + 2	             "Double Bogey"
>= par + 3    	      "Go Home!"


par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/

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
