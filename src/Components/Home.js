import React, { useState } from "react";
import Contact from "./Contact";

function Home() {
  const [form, setForm] = useState([{
    name: "",
    age: "",
    email: "",
    contact: "",
  }]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setForm((currentValue) => {

      return  {

      ...currentValue ,

      [name] : value

      }
   
    });

 
  };

  return (
    <div>
      <h1>Home component</h1>

      <div>
        <form>
          <label>Name :</label> <br />
          <input
            type="text"
            name="name"
            value={form.name}
            style={{ outline: "none" }}
            onChange={handleChange}
          />
          <br /> <br />
          <label>Age :</label> <br />
          <input
            type="number"
            name="age"
            value={form.age}
            style={{ outline: "none" }}
            onChange={handleChange}
          />
          <br /> <br />
          <label>E-mail :</label> <br />
          <input
            type="email"
            name="email"
            value={form.email}
            style={{ outline: "none" }}
            onChange={handleChange}
          />
          <br /> <br />
          <label>Contact :</label> <br />
          <input
            type="number"
            name="contact"
            value={form.contact}
            style={{ outline: "none" }}
            onChange={handleChange}
          />
          <br /> <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
