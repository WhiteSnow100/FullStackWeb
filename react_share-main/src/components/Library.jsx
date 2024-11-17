import Book from "./Book";

function Library() {
  return (
    <div>
      <Book title="처음 만난 리액트" author="이인제" />
      <Book title="처음 배우는 Azure" author="김도균" />
      <Book title="Node.js 백엔드 개발자 되기" author="박승규" />
    </div>
  );
}

export default Library;
