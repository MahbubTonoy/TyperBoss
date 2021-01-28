let status = 0;
/*
  status code:
    loaded=0;
    starting=1;
    playing=2;
    pause=3;
    game over=4;
*/

// the query function starts
function query(key, all) {
  if (all) {
    return document.querySelectorAll(key);
  } else {
    if (key.split("")[0] == "." || key.split("")[0] == "#") {
      return document.querySelector(key);
    } else {
      return document.getElementById(key);
    }
  }
}
// query function end

// choose difficulty starts
let difficulty = 0; //default easy mode
let second = 7; //default easy mode second
// 0=easy -> 7 sec
// 1=medium -> 5 sec
// 2=hard -> 3 sec
function diff(value) {
  difficulty = value;
  if (difficulty == 0) {
    second = 7;
    query("easy").classList.add("active");
    query("medium").classList.remove("active");
    query("hard").classList.remove("active");
    query("sec").innerHTML = second;
    query("time").innerHTML=second;
  } else if (difficulty == 1) {
    second = 5;
    query("easy").classList.remove("active");
    query("medium").classList.add("active");
    query("hard").classList.remove("active");
    query("sec").innerHTML = second;
    query("time").innerHTML=second;
  } else if (difficulty == 2) {
    second = 3;
    query("easy").classList.remove("active");
    query("medium").classList.remove("active");
    query("hard").classList.add("active");
    query("sec").innerHTML = second;
    query("time").innerHTML=second;
  }
}
// choose difficulty end
// get the input box dom
let inputbox = query("inputbar");

// main play button actions
let start = 4;
let choosenWord = "";
query("play").addEventListener("click", () => {
  status = 1; //change game status into starting
  query(".action_bar").classList.add("force_shrink"); //main play button shrink
  query(".main_game").classList.remove("force_shrink"); //expand gamebar
  query(".countdown_container").classList.add("force_expand"); //expand gamebar
  let inverval = setInterval(() => {
    //countdown started
    query(".start_countdown").innerHTML = start; //print countdown in dark screen
    start--;
    if (start < 0) {
      query(".countdown_container").classList.add("slide_left"); //slide countdown container into left

      choosenWord = random(); //choose random word
      query("word").innerHTML = choosenWord; //print random word

      inputbox.focus(); //focus on input box
      play();
      status = 2; //change game status into playing
      clearInterval(inverval); //stop counting when it's 0
    }
  }, 1000);
});

// this function will return one random word everytime
function random() {
  let word = words[Math.round(Math.random() * words.length - 1)];
  return word.charAt(0).toUpperCase() + word.slice(1);
}
// random function closed


//play functionality start
let secondShrink = second;
let score = 0;
function play() {
  
  let playInterval = setInterval(function(){
    secondShrink--;
    query("time").innerHTML=secondShrink;
    if(secondShrink == 0) {
      query("game_over").classList.add("game_over_display");
      inputbox.disabled=true;
      clearInterval(playInterval);
    }
  }, 1000);
}
// play functionality ends

//insert text on inputbox
inputbox.addEventListener("input", function(event){
  // inputbox.value = inputbox.value+String.fromCharCode(x);
  if(inputbox.value == choosenWord) {
    console.log("+++ Trigger");
    choosenWord = random(); //choose random word
    query("word").innerHTML = choosenWord; //print random word
    inputbox.value="";
    score += secondShrink;
    secondShrink = second;
    query("time").innerHTML=secondShrink;
    query("score").innerHTML=score;
  }
});