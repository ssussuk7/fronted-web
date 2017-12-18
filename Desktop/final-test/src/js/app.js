console.log('my-note app.js');

$(function(){
  if (localStorage.getItem('text')) { //localStorage에 저장된게 있으면 출력
    $('#memo').val(localStorage.getItem('text'));
  }
});

$('.btn-newnote').on("click", function(){ //새노트 클릭시
    localStorage.clear();
    location.reload();
    console.log('new note');
});

$('.btn-savenote').on("click", function(){ //노트저장 클릭시
    console.log('save note');
    var save_note_text = $('#memo').val();
    localStorage.setItem('text',save_note_text);
});

$('.btn-filesave').on("click", function(){ // 노트다운로드 클릭시
    console.log('download note');
    var blob = new Blob([localStorage.getItem('text')], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "MyNote.txt");
});

$('.btn-about').on("click", function(){ //ablout 클릭시
  console.log('about note');
  var about = "컴퓨터공학과 홍석우의 노트 어플리케이션 입니다.";
  $('#memo').val(about);
});

$('.btn-fullscrean').on("click", function(){ //전체화면 클릭시
    console.log('fullscrean note');
    if (screenfull.enabled) {
		screenfull.request();
	}
});
