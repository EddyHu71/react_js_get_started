import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myElement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>
// const myElement = <h1 className="myclass">Hello World</h1>;
const x = 5
let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// const myElement = <h1>{text}</h1>

const myElement = <h1>{(x) < 10 ? "Hello" :  "Goodbye"}</h1>
ReactDOM.render(
  myElement,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <p>Halo</p>,
//   document.getElementById('sandy')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
