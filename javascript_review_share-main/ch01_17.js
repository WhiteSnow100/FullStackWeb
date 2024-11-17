let arr = [5, 23, "hello", true, "world", -9];
for (i in arr) {
  if (typeof arr[i] == "string") {
    break;
  }
  console.log(`${arr[i]}`); // 5. 23
}

for (i in arr) {
  if (typeof arr[i] == "string") {
    continue;
  }
  console.log(`${arr[i]}`);
}
