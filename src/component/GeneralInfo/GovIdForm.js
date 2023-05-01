import { useState } from 'react';
import axios from 'axios';

function GovIdForm() {
  const [formData, setFormData] = useState({
    country: '',
    idType: '',
    idNumber: '',
    expiryDate: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://159.89.93.69:5698/save', formData)
      .then(response => {
        setSuccessMessage('Data saved successfully!');
        setFormData({
          country: '',
          idType: '',
          idNumber: '',
          expiryDate: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Country
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>
      <label>
        ID Type
        <input type="number" name="idType" value={formData.idType} onChange={handleChange} />
      </label>
      <label>
        ID Number
        <input type="number" name="idNumber" value={formData.idNumber} onChange={handleChange} />
      </label>
      <label>
        Date of Expiry
        <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default GovIdForm;
