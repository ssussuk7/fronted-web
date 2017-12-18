console.log('my-note app.js');

$(function () {
    if(localStorage.getItem('text')) { //localStorage 에 text가 있을시 출력한다
        $('#memo').val(localStorage.getItem('text'));
    }
});

$('.btn-newnote').on("click", function(){ //새로운 메모
    console.log("new note");
    localStorage.clear();
    location.reload();
});

$('.btn-savenote').on("click", function(){ //노트 저장하기
    console.log("savenote");
    var text = $('#memo').val();
    localStorage.setItem('text',text);
});


$('.btn-fullscrean').on("click", function(){ // 풀 스크린
    console.log("fullscreen");
    if (screenfull.enabled) {
		screenfull.request();
	}
});

$('.btn-notedownload').on("click", function(){ //다운로드 클릭
    console.log("notedownload");
    var blob = new Blob([localStorage.getItem('text')], {type: "text/plain;charset=utf-8"});
saveAs(blob, "MyNote.txt");
});


$('.btn-about').on("click", function(){ //about
    console.log("about");
    var about = '홍석우의 노트장입니다.';
    $('#memo').val(about);

});
