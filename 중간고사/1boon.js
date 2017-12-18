var trendurl = 'http://1boon.kakao.com/ch/trending.json?pagesize=3&page=';
var issueurl = 'http://1boon.kakao.com/ch/issue.json?pagesize=3&page=';
var enterurl = 'http://1boon.kakao.com/ch/enter.json?pagesize=3&page=';
var str='';
var pazesize = 3; //한 페이지당 보여줄 개수
var paze = 1;// 페이지


var homebtn = document.getElementById('homeimg');
var trendbtn = document.getElementById('trendcircle');
var issuebtn = document.getElementById('issuecircle');
var enterbtn = document.getElementById('entercircle');
var list = document.getElementById('list');
var anotherbtn = document.getElementById('anotherbtn');
var currenttarget;



//data(Array)  리스트의 목록배열
  //data[].title  제목
  //data[].coverImage 이미지
  //data[].path 링크  ( http://1boon.kakao.com/{path} 로 링크 걸어주세요)
  //data[].totalView 조회수

  //트렌드 뿌리기
  function trenddone(result){
    console.log(result);
    currenttarget = trendurl;
    for(var i=0; i < pazesize; i++){
      console.log(result.data[i].title)
      str += '<span id="first">'
      str += '<div id = "imgdiv"><img src='+result.data[i].coverImage+' id="image"></div>'
      str += '<div id ="titlediv"><p id="title">'+result.data[i].title+'</p></div>'
      str += '<span id ="viewdiv">조회수 :'+result.data[i].totalView+'</span>'
      str += '<span id ="href"><a href="http://1boon.kakao.com/'+result.data[i].path+'">-링크-</a></span>'
      str += '</div>'
      str += '</span>'
    }
    list.innerHTML = str;

  }


  //이슈 뿌리기
  function issuedone(result){
    console.log(result);
    currenttarget = issueurl;
    for(var i=0; i < pazesize; i++){
      console.log(result.data[i].title)
      str += '<span id="first">'
      str += '<div id = "imgdiv"><img src='+result.data[i].coverImage+' id="image"></div>'
      str += '<div id ="titlediv"><p id="title">'+result.data[i].title+'</p></div>'
      str += '<span id ="viewdiv">조회수 :'+result.data[i].totalView+'</span>'
      str += '<span id ="href"><a href="http://1boon.kakao.com/'+result.data[i].path+'">-링크-</a></span>'
      str += '</div>'
      str += '</span>'
    }
    list.innerHTML = str;

  }


  //엔터 뿌리기
  function enterdone(result){

    console.log(result);
    currenttarget = enterurl;
    for(var i=0; i < pazesize; i++){
    console.log(result.data[i].title)
    str += '<span id="first">'
    str += '<div id = "imgdiv"><img src='+result.data[i].coverImage+' id="image"></div>'
    str += '<div id ="titlediv"><p id="title">'+result.data[i].title+'</p></div>'
    str += '<span id ="viewdiv">조회수 :'+result.data[i].totalView+'</span>'
    str += '<span id ="href"><a href="http://1boon.kakao.com/'+result.data[i].path+'">-링크-</a></span>'
    str += '</span>'
  }
    list.innerHTML = str;
  }

var home = function() //홈버튼을 클릭하면 처음 화면으로 돌아감
{
  trendbtn.style.backgroundColor = 'white';
  issuebtn.style.backgroundColor = 'white';
  enterbtn.style.backgroundColor = 'white';
  str = '';
  currenttarget = 0;
  list.innerHTML = str;
}

var trendclick = function() //트렌딩을 클릭하면 나올 함수
{
  trendbtn.style.backgroundColor = 'pink';
  issuebtn.style.backgroundColor = 'white';
  enterbtn.style.backgroundColor = 'white';
  paze =1;
  str = ''
  getJSON(trendurl,trenddone);
}

var issueclick = function() //이슈를 클릭하면 나올 함수
{
  trendbtn.style.backgroundColor = 'white';
  issuebtn.style.backgroundColor = 'pink';
  enterbtn.style.backgroundColor = 'white';
  paze =1;
  str = ''
  getJSON(issueurl,issuedone);
}

var enterclick = function() //엔터를 클릭하면 나올 함수
{
  trendbtn.style.backgroundColor = 'white';
  issuebtn.style.backgroundColor = 'white';
  enterbtn.style.backgroundColor = 'pink';
  paze =1;
  str = ''
  getJSON(enterurl,enterdone);
}

homebtn.addEventListener('click',home); //홈버튼
trendbtn.addEventListener('click',trendclick); //트렌딩
issuebtn.addEventListener('click',issueclick); //이슈
enterbtn.addEventListener('click',enterclick); //엔터

anotherbtn.addEventListener('click',function()
{
  if (currenttarget == trendurl) {
    paze++
    getJSON(trendurl + paze,trenddone);
  }
  else if (currenttarget == issueurl ) {
    paze++
    getJSON(issueurl + paze,issuedone);
  }
  else if (currenttarget == enterurl) {
    paze++
    getJSON(enterurl + paze,enterdone);
  }
})
