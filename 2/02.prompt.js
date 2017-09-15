var sum = 0;

for (var trueval = false; trueval == false;)
{
  var num =prompt("숫자를 입력하세요");

  if (num == null)
  {
    alert("숫자들의 합은"+sum+"입니다.");
    trueval = true;
  }
  else
  {
    sum += parseInt(num, 10);
  }
}
alert(sum);
