
interface ButtonPropos {
   title: String;
}

function Button(props: ButtonPropos){

  return <button>
           {props.title}
           </button>
}

function App() {
  
  return (
    <div>
       <Button title = "Send 1"/>
       <Button title = "Send 2"/> 
      <Button title = "Send 3"/>
  </div>
  )
}

export default App
