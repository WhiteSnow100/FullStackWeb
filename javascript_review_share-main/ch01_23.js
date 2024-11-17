console.log("begin");
setTimeout(() => {
  console.log("1초뒤에 호출");
}, 1000); // ms 단위
console.log("end");
setInterval(() => {
  console.log("0.5초 간격으로 호출");
}, 500);
