import logo from "./logo.svg";
import "./App.css";
import Member from "./components/Member";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Member image="/bts/bts1.png" nickname="RM" />
        <Member image="/bts/bts2.png" nickname="진" />
        <Member image="/bts/bts3.png" nickname="슈가" />
        <Member image="/bts/bts4.png" nickname="제이홉" />
        <Member image="/bts/bts5.png" nickname="지민" />
        <Member image="/bts/bts6.png" nickname="뷔" />
        <Member image="/bts/bts7.png" nickname="정국" />
      </div>
    </div>
  );
}

export default App;
