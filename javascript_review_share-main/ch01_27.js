const posts = [
  {
    title: "Test Title",
    content: "Test Content",
    author: { name: "lee", id: 1, age: 25 },
  },
  {
    title: "Test Title2",
    content: "Test Content2",
    author: { name: "hong" },
  },
  {
    title: "Test Title3",
    content: "Test Content3",
  },
];

posts["data"].forEach((item) => {
  try {
    if ("author" in item) {
      console.log(item[author][name]);
    }
    console.log("====================");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("function closed");
  }
});
