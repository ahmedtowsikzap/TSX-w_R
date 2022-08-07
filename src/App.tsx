import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';
// let student: string = "jeff";
// let age : number = 69;
// let isSmart: boolean = true;

// let students: string = ["lorem", "joe", "biden"];
// let fees: number = [12,2,4,533,224,13,24];

// interface Person{
//   name: string,
//   job?:string,
//   employed: string | boolean
//   age: number,
//   location?: string | number
// }

// const person: Person = {
//   name: "bill",
//   employed: true,
//   age:64,
//   location: "ghana"
// }
// const handleAddUser = (firstName:string, age: number, address: string):number => {
//   const total: number = 50;
//   console.log(firstName, age, address)
//   return total;

// }

function App() {
  return (
    <div className="App">
      <Counter/>
      <Users/>
    </div>
  );
}

export default App;
