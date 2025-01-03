import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function tick() {
  const content = (
    <div>
      <h1>Hello,React</h1>
      <h2>current Time: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(content);
}

setInterval(tick, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
