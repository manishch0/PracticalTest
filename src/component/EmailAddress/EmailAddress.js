import { useState } from "react";
import axios from "axios";

function EmailAddress() {
  const [email, setEmail] = useState("");
  const [useFor, setUseFor] = useState([]);
  const [note, setNote] = useState("");

  const handleUseForChange = (event) => {
    const selectedUseFor = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setUseFor(selectedUseFor);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      useFor,
      note,
    };
    axios
      .post("http://159.89.93.69:5698/save", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label>Use For</label>
      <select
        name="useFor"
        value={useFor}
        onChange={handleUseForChange}
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="other">Other</option>
      </select>
      <label>Note</label>
      <textarea
        name="note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailAddress;
