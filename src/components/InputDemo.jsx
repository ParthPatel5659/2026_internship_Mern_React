import React, { useState } from "react";

export const InputDemo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");

  const resetAll=()=>{
      setName("");
      setAge("");
      setGender("");
      setCity("");
      setEmail("");
      setMobile("");
      setPassword("");
      setState("");
      setCountry("");
      setCourse("");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>InputDemo</h1>
      {/*input tag*/}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{name}
      <br /> 
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />{age}
      <br />
      <input
        type="text"
        placeholder="Enter Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />{gender}
      <br />
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />{city}
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{email}
      <br />
      <input
        type="text"
        placeholder="Enter Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />{mobile}
      <br />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{password}
      <br />
      <input
        type="text"
        placeholder="Enter State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />{state}
      <br />
      <input
        type="text"
        placeholder="Enter Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />{country}
      <br />
      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />{course}
      <br />
        <button onClick={resetAll}>RESET ALL</button>
    </div>
  );
};
