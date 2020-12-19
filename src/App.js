/* src/App.js */
import React from 'react'
import ToDoPage from "./ToDoPage"
//import awsExports from "../aws-exports";
//Amplify.configure(awsExports);



const App = () => {

  return (
    <div>
      <h2>Quarantine Productivity App</h2>
      <ToDoPage/>
    </div>
    
  )
}

export default App