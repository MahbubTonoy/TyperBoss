console.log("Hello World");
let status = 0;
/*
  status code:
    loaded=0;
    starting=1;
    playing=2;
    pause=3;
    game over=4;
*/

// choose difficulty
let difficulty = 0;
let second = 7;
// 0=easy - 7 sec
// 1=medium - 5 sec
// 2=hard - 3 sec
function diff(value) {
  difficulty = value;
  if (difficulty == 0) {
    second = 7;
    document.getElementById("easy").classList.add("active");
    document.getElementById("medium").classList.remove("active");
    document.getElementById("hard").classList.remove("active");
  } else if (difficulty == 1) {
    second = 5;
    document.getElementById("easy").classList.remove("active");
    document.getElementById("medium").classList.add("active");
    document.getElementById("hard").classList.remove("active");
  } else if (difficulty == 2) {
    second = 3;
    document.getElementById("easy").classList.remove("active");
    document.getElementById("medium").classList.remove("active");
    document.getElementById("hard").classList.add("active");
  }
}
