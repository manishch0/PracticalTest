import { useState } from "react";
import axios from "axios";

function Mobile() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [useFor, setUseFor] = useState([]);
  const [preferredDays, setPreferredDays] = useState([]);
  const [messageService, setMessageService] = useState("");
  const [messageServiceId, setMessageServiceId] = useState("");
  const [addReminder, setAddReminder] = useState(false);

  const handleUseForChange = (event) => {
    const selectedUseFor = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setUseFor(selectedUseFor);
  };

  const handlePreferredDaysChange = (event) => {
    const selectedPreferredDays = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setPreferredDays(selectedPreferredDays);
  };

  const handleAddReminderChange = (event) => {
    setAddReminder(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      mobileNumber,
      useFor,
      preferredDays,
      messageService,
      messageServiceId,
      addReminder,
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
          required
        />
        <label>Use For</label>
        <select name="useFor" value={useFor} onChange={handleUseForChange}>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="other">Other</option>
        </select>
        <label>Preferred Day</label>
        <select
          name="preferredDays"
          value={preferredDays}
          onChange={handlePreferredDaysChange}
        >
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="All Days">All Days</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
        </select>
        <label>Message Service</label>
        <select
          name="messageService"
          value={messageService}
          onChange={(event) => setMessageService(event.target.value)}
        >
          <option value="">Select Message Service</option>
          <option value="WeChat">WeChat</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>

        <label>Message Service ID</label>
        <input
          type="text"
          name="messageServiceId"
          value={messageServiceId}
          onChange={(event) => setMessageServiceId(event.target.value)}
        />

        <label>AddReminder</label>
        <input
          type="text"
          name="addReminder"
          value={addReminder}
          onChange={handleAddReminderChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Mobile;
