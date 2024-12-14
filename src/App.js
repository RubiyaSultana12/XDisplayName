import { useState } from "react";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullname, setFullName] = useState();

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFullName(`${firstname} ${lastname}`);
        }}
      >
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          style={{
            margin: "15px",
            padding: "5px",
          }}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br></br>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          style={{
            marginTop:"5px",
            padding:"5px"
           }}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br></br>
        <button
          type="submit"
          style={{
            
            marginTop: "10px",
           padding: "8px 15px", 
           cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
      {fullname && <p>Full Name:{fullname}</p> }
    </div>
  );
}

export default App;
