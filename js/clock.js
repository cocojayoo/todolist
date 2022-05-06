const clock = document.querySelector("h2#clock")


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);

getClock(); //페이지가 로딩되면서 바로 한번 더 실행시켜서 1초간의 공백을 매꿔준다!
setInterval(getClock, 1000);

//padStart(2, "0") - 길이가 한자리일 경우에는 패드스타트를 써서 패딩을 써달라고 부탁하고, 문자열 길이가 2개는 되어야한다, 2개가 아닐 경우에는 앞에 "0"을 추가해주세요! 라는 기능!
//padEnd도 있다! 뒤에 문자를 추가해줄때 사용!


