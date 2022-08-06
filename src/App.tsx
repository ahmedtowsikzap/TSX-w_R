import './App.css';
let student: string = "jeff";
let age : number = 69;
let isSmart: boolean = true;

let students: string = ["lorem", "joe", "biden"];
let fees: number = [12,2,4,533,224,13,24];

interface Person{
  name: string,
  job?:string,
  age: number
}

const person: Person = {
  name: "bill",
  age:64
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
