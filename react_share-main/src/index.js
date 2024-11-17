import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Book from "./components/Book";
import Library from "./components/Library";
// JSX
const element = <h1 className="greeting">Hello JSX</h1>;

// 메소드 엘리먼트
const element1 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello Method Element"
);

// root는 index.html의 div를 가져옴
// 컴포넌트는 대문자로 시작
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

// root.render(element1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
