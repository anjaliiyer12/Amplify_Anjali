/* src/App.js */
import React from 'react'
import ToDoHomePage from "./ToDoHomePage"
//import awsExports from "../aws-exports";
//Amplify.configure(awsExports);



const App = () => {

  return (
    <div>
      <h2>Quarantine Productivity App</h2>
      <h3>Fun!</h3>
      <ToDoHomePage/>
    </div>
    
  )
}

/*const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
*/
export default App