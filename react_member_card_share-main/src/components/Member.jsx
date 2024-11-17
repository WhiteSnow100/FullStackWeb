function Member(props) {
  const { image, nickname } = props;

  return (
    <div className="member">
      <img className="member" src={image} alt={nickname} />
      <p className="nickname">{nickname}</p>
      <p>BTS</p>
    </div>
  );
}

export default Member;
