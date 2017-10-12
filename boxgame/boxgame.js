var score = 0; var Maxscore = 5;
var level = 1; var Maxlevel = 5;
var miss = 0; var Maxmiss = 5;

var scoreboard = document.getElementById('menudiv');
scoreboard.innerHTML =   '<p>Score : <span id="score">' +score+ '</span></p>'+
                         '<p>Stage : <span id="stage">'+level+'</span></p>'+
                         '<p>Miss : <span id ="miss">'+ miss + ' / ' + Maxmiss+'</span></p>';
var scorein = document.getElementById('score');
var levelin = document.getElementById('stage');
var missin = document.getElementById('miss');

var boxadd = document.getElementById('boxdiv');
boxadd.innerHTML = '<div id ="box"></div>';
var boxvar = document.getElementById('box');
//스코어 초기화
var rescore = function()
{
  score = 0; level = 1; miss = 0;
  scorein.innerHTML = score;
  levelin.innerHTML = level;
  missin.innerHTML = miss + ' / ' + Maxmiss;
}

//난수 생성
var generateRandom = function (min, max) {
  var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
  return ranNum;
}

//박스가 아닌 다른 영역 클릭시
var fault = function()
{
  miss++;
  if (miss == Maxmiss) {
    alert("실패하셨습니다")
    rescore();
  }
  missin.innerHTML = miss + ' / ' + Maxmiss;
  relocated();
}
boxadd.addEventListener("click",fault);

//박스를 클릭했을 때
var onclick = function()
{
  boxvar.style.backgroundColor ='blue';
  score++;
  if (score == Maxscore) {
    score = 0;
    scorein.innerHTML = score;
    level++;
    if (level == Maxlevel) {
      alert("클리어 하였습니다.");
      rescore();
    }
    levelin.innerHTML = level;
  }
  scorein.innerHTML = score;
}
boxvar.addEventListener("click",onclick);

//박스 재배치
var relocated = function()
{
    boxvar.style.backgroundColor = 'red';
    var toppx = generateRandom(0,300)+'px';
    var leftpx = generateRandom(0,450) + 'px';
    boxvar.style.top = toppx;
    boxvar.style.left = leftpx;
}
boxvar.addEventListener("mouseup",relocated);
