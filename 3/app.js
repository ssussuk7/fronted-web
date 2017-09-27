var board = document.getElementById('board');
var black_ground = "<div class = \"black\"></div>";
var white_ground ="<div class = \"white\"></div>";

for (var i = 0; i < 4; i++)
{
  for (var j = 0; j < 4; j++)
  {
    if ((i+j)%2 == 0) {
      board.innerHTML += black_ground;
    }
    else {
      board.innerHTML += white_ground;
    }
  }
}

var color;

board.addEventListener("mousedown",function(event){
  color = event.target.className;
  event.target.className = "red";
});

board.addEventListener("mouseup",function(event){
  event.target.className = color;
});
