let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.push(11);
arr.push(12);
arr.push(13);

arr.forEach((num, i) => {
  console.log(`${num} ${i}`);
});
