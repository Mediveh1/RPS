//1-make a pomodoro app with start button , pause

let div = document.getElementById("timer");
//let string = clock.textContent;
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let stopBtn = document.getElementById("stop-btn");
let restsBtn = document.getElementById("rests-btn");
let restlBtn = document.getElementById("restl-btn");
let totalTime = document.getElementById("wtf");
let submitBtn = document.getElementById("submit-url");
let sec = 60;
let offmin = 4;
let offminl = 14;
let onTime = 24;
var currenttime;
var paused = 0;
let rest5 = 0;
var count = 0;
var totalCount = 0;

totalTime.textContent = ` Total Pomodori's Done:  ${count}`;
console.log(count);
restsBtn.style.visibility = "hidden";
restlBtn.style.visibility = "hidden";

//declaring variable for play sound method
let sound = new Audio("end.mp3");

//pause button

pauseBtn.addEventListener("click", function () {
  clearInterval(paused);
});

//start btn
startBtn.addEventListener("click", startF);
//start function
function startF() {
  startBtn.style.visibility = "visible";
  restsBtn.style.visibility = "hidden";
  if (paused !== 0) {
    clearInterval(paused);
  }
  paused = setInterval(() => {
    sec--;
    div.innerHTML = `${onTime}:${sec}`;

    if (sec == 0) {
      onTime--;
      sec = 59;
    }

    if (onTime == 0) {
      onTime = 24;
      sec = 60;
      div.innerHTML = `00:00`;
      sound.play();
      clearInterval(paused);
      count++;

      if (count <= 3) {
        rests();
      } else restl();
    }
  }, 1000);
}

//rest interval 5 minutes
function rests() {
  restsBtn.style.visibility = "visible";
  startBtn.style.visibility = "hidden";

  restsBtn.addEventListener("click", () => {
    if (paused !== 0) {
      clearInterval(paused);
    }
    paused = setInterval(() => {
      sec--;
      div.innerHTML = `${offmin}:${sec}`;
      if (sec == 0) {
        offmin--;
        sec = 60;
      }
      if (offmin == 0) {
        offmin = 4;
        sec = 60;
        div.innerHTML = `00:00`;
        sound.play();
        clearTimeout(paused);
        startBtn.style.visibility = "visible";
        restsBtn.style.visibility = "hidden";
      }
    }, 1000);
  });
}

//rest interval 15 minutes
function restl() {
  startBtn.style.visibility = "hidden";
  restlBtn.style.visibility = "visible";
  restlBtn.style.visibility = "visible";
  restlBtn.addEventListener("click", () => {
    restlBtn.style.visibility = "visible";
    if (paused !== 0) {
      clearInterval(paused);
    }
    paused = setInterval(() => {
      sec--;
      div.innerHTML = `${offminl}:${sec}`;
      if (sec == 0) {
        offminl--;
        sec = 59;
      }
      if (offminl == 0) {
        offminl = 14;
        sec = 60;
        div.innerHTML = `00:00`;
        clearInterval(paused);

        startBtn.style.visibility = "visible";
        restlBtn.style.visibility = "hidden";
      }
    }, 1000);
  });
}

//reset button
stopBtn.addEventListener("click", function () {
  clearInterval(paused);
  //onmin = 0;
  //sec = 0;
  div.innerHTML = `00:00`;
});

//object for filtered URLS

// const filterUrl = {
//   urls: [
//     "*://facebook.com/*",
//     "*://twitter.com/*",
//     "*://www.facebook.com/*",
//     "*://instagram.com/*",
//   ],
// };
// console.log(filterUrl);
// const filterState = ["blocked"];

// window.chrome.webRequest.onBeforeRequest.addListener(
//   (page) => {
//     console.log("page blocked - " + page.url);

//     return {
//       cancel: true,
//     };
//   },
//   filter,
//   opt
// );

//blocking box

//clicking the submit button
submitBtn.addEventListener("click", submitv);

//submite function

function submitv() {
  var text1 = document.getElementById("block-box").value;

  filterUrl.urls.push(text1);
  text1.value = "";
  console.log(filterUrl);
}
