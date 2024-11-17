let pi; // 변수 선언
// 변수는 재할당이 가능하다.
// 상수는 재할당이 불가능하다.
console.log(pi); // undefined
pi = 3.14; // 재할당
console.log(pi); // 3.14

// 상수
const PI = 3.141592; // 상수는 재할당이 불가능
console.log(PI); // 3.141592
PI = 2.78;
console.log(PI); // TypeError: Assignment to constant variable.
