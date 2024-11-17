const date = new Date();
const hour = date.getHours();

if (hour < 11) {
  console.log(`아침 : 오늘 날짜는 ${date} 현재 시간은 ${hour}시 입니다.`);
} else {
  if (hour < 15) {
    console.log(`점심 : 오늘 날짜는 ${date} 현재 시간은 ${hour}시 입니다.`);
  } else {
    console.log(`저녁 : 오늘 날짜는 ${date} 현재 시간은 ${hour}시 입니다.`);
  }
}

const aa = {};
aa["hour"] = hour;
console.log(aa);
const bb = { name: "lee" };
aa = bb;
// TypeError: Assignment to constant variable.
