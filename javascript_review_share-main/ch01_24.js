let personInfo = {
  name: "lee",
  age: 55,
  address: "서울 금천구 독산동 123",
  hobby: ["독서", "등산", "낚시", "넷플릭스"],
};

console.log(personInfo);
console.log(JSON.stringify(personInfo["name"]));
console.log(personInfo.age);
console.log("---------------");
personInfo["gender"] = "M";
console.log(personInfo);
personInfo["address"] = "서울 양천구 신정동"; // 객체 value 업데이트

// 기존 키에 값을 할당하면 update
// 기존에 없는 키를 추가하는 경우 insert
