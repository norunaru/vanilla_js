const clock = document.querySelector("h2#clock");
//padStart는 String에만 사용 가능
function getClock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

getClock();
setInterval(getClock, 1000); //setInterval함수는 실행할 함수, ms를 인자로 받아서 ms마다 실행
//sdf
