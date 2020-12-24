/* src/App.js */
import { urlAlphabet } from 'nanoid'
import React from 'react'
import ToDoPage from "./ToDoPage"
import "./App.css";
//import awsExports from "../aws-exports";
//Amplify.configure(awsExports);



const App = () => {

  return (
    <div>
      <div><h2 color="white">Quarantine Productivity App</h2></div>
      <div class="bg_image"><ToDoPage/></div>
    </div>
    
  )
}

export default App