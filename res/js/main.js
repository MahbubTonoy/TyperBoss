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
    document.querySelector("[for='easy']").classList.add("active");
    document.querySelector("[for='medium']").classList.remove("active");
    document.querySelector("[for='hard']").classList.remove("active");
  } else if (difficulty == 1) {
    second = 5;
    document.querySelector("[for='easy']").classList.remove("active");
    document.querySelector("[for='medium']").classList.add("active");
    document.querySelector("[for='hard']").classList.remove("active");
  } else if (difficulty == 2) {
    second = 3;
    document.querySelector("[for='easy']").classList.remove("active");
    document.querySelector("[for='medium']").classList.remove("active");
    document.querySelector("[for='hard']").classList.add("active");
  }
}
