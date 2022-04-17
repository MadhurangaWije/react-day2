import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState('')

  const handleSubmition = (event)=> {
    event.preventDefault();
    console.log(firstName);
  }
  

  return (
    <div >
      <h1>Forms</h1>

      <form onSubmit={handleSubmition}>
        <div>
          <label>First Name</label>
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type='text' />
        </div>
        <div>
          <label>Second Name</label>
          <input type='text' />
        </div>
        <div>
          <label>Gender</label>
          <div>
            <label>Male</label>
            <input name="gender" type='radio'  />
          </div>
          <div>
            <label>Female</label>
            <input name="gender" type='radio'  />
          </div>
        </div>
        <div>
          <input type='submit' value='Submit'/>
        </div>
      </form>
    </div>
  );
}

export default App;
