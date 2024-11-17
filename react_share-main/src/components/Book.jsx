// 함수 컴포넌트를 클래스 컴포넌트보다 19년도부터 더 많이 쓴다.

function Book(props) {
  const { title, author } = props;

  // 리턴 엘리먼트는 하나로 묶어줘야 한다. <> </> 도 사용 가능
  return (
    <div className="book">
      <h1>이 책의 이름은 {title}입니다.</h1>
      <h2>이 책의 저자는 {author}입니다.</h2>
    </div>
  );
}
export default Book;
