import { useState } from "react";
import axios from "axios";

function GeneralInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    salary: "",
    gender: "",
    prefix: "",
    image: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const bodyFormData = new FormData();
    for (const key in formData) {
      bodyFormData.append(key, formData[key]);
    }
    axios
      .post("http://159.89.93.69:5698/save", bodyFormData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: event.target.files[0],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        onChange={handleInputChange}
        required
      />
      <label>Middle Name </label>
      <input type="text" name="middleName" onChange={handleInputChange} />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        onChange={handleInputChange}
        required
      />
      <label>Date of Birth</label>
      <input
        type="date"
        name="dateOfBirth"
        onChange={handleInputChange}
        required
      />
      <label>Salary</label>
      <input
        type="number"
        name="salary"
        onChange={handleInputChange}
        required
      />
      <label>Gender</label>
      <select name="gender" onChange={handleInputChange} required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label>Prefix</label>
      <input type="text" name="prefix" onChange={handleInputChange} />
      <label>Image</label>
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralInfo;
