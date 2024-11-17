function add1(x, y) {
  console.log(`${x} ${y}`);
  const r = x + y;
  return r;
}

console.log(`add result => ${add1(11, 22)}`);
const add2 = function (x, y) {
  console.log(`add2 x : ${x} y: ${y}`);
  const r = x + y;
  return r;
}; // 익명 함수

console.log(`add2 result => ${add2(11, 22)}`);

const add3 = (x, y) => {
  console.log(`add3 x : ${x} y: ${y}`);
  const r = x + y;
  return r;
}; // 익명 함수
console.log(`add3 result => ${add2(11, 22)}`);
