let a = 59;
let b = 5;
const simple_fn = function () {
  const timer_element = document.getElementById("minutes");
  const timer = document.getElementById("seconds");
  if (a == 59) {
    b -= 1;
    if (b < 0 ) {
        b = 5;
           const time = document.getElementById('timer');
            timer_element.style.display = "time";
            var stop = document.getElementById("sto");
            stop.style.display = "none";
        start.style.display = 'initial';
        
      }
    timer_element.innerText = `${b} minutes`;
  }
 
  timer.innerText = `${a} seconds`;
  a -= 1;
  if (a == 0) {
    timer_element.innerText = `${b} minutes`;
    a = 60;
  }
};
var inter;

var set = function () {
  //Something here.
  inter = setInterval(simple_fn, 1000);
  start.style.display = "none";
  // clearTimeout(another_id);
  if (start.style.display == "none") {
    var stop = document.getElementById("sto");
    stop.style.display = "initial";
    stop.addEventListener("click", sto);
  }
};

const sto = function () {
  //Something here.
  clearInterval(inter);
  clearTimeout(inter);
};

var start = document.getElementById("start");
start.addEventListener("click", set);
