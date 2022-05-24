import "./App.css";
import Card from './components/Card';
import FetchNews from "./components/FetchNews";


// function App() {
//   return(
//     <div className="App">
//       <div className="container">
//         <Card />
//       </div>
//     </div>
//   )
// }
//******************************************************************** */

// fetch("https://reqres.in/api/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Aakash Goswami",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));


// ******************************************************** //

function App() {
  return(
    <>
      <FetchNews />
    </>
  )
}
export default App;
