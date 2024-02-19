import * as React from "react"

const welcome = {greeting :"hey", title : "yassine"};
function App() {
 return (
  <div>
    <h1> {welcome.greeting} {welcome.title} </h1> {/**syntaxe jsx */}
    <label htmlFor="search">serach :</label>
    <input id="search" type="text"/>
  </div>
 )
}

export default App
