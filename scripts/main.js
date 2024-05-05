var slider_line = document.querySelector(".slider_line");
var target_slider_arrows = document.querySelectorAll(".arrow");
var offset = 0;
for (let a of target_slider_arrows) {
  a.addEventListener("click", function (e) {
    var dir = e.target.dataset.dir;
    if (dir == "left") {
      offset = offset - 100;
      slider_line.style.left = offset + "px";
    }
    if (dir == "right") {
      offset = offset + 100;
      slider_line.style.left = offset + "px";
    }
  });
}
var target_que = document.querySelectorAll(".pustiska");

for (let s of target_que) {
  s.addEventListener("click", function (e) {
    var don = e.target.closest(".question_sample");
    var answer = don.querySelector(".answer");
    var plus = don.querySelector(".plus");
    var minus = don.querySelector(".minus");
    if (answer.style.display == "block") {
      answer.style.display = "none";
      minus.style.display = "none";
      plus.style.display = "block";
    } else {
      answer.style.display = "block";
      minus.style.display = "block";
      plus.style.display = "none";
    }
  });
}

/* target_que.addEventListener("click", function (e) {
  var don = target_que.closest(".question_sample");
  don.style.backgroundColor = "red";
  console.log(don);
}); */
