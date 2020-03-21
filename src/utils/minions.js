export default function kanahei() {
  let kanahei = function() {
    let img = new Image();
    img.src = data;
    img.style.width = "300px";
    img.style.height = "260px";
    img.style.transition = "1s all";
    img.style.position = "fixed";
    img.style.left = "calc(50% - 160px)";
    img.style.top = "-260px";
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    setTimeout(function() {
      img.style.top = "0px";
      // img.style.bottom = '0px';
    }, 30);
    setTimeout(function() {
      img.style.top = "-260px";
    }, 1200);
    setTimeout(function() {
      img.parentNode.removeChild(img);
    }, 1500);
  };

  let init = function() {
    kanahei();
  };
  let data = require("../assets/minions.gif");

  init(data);
}
