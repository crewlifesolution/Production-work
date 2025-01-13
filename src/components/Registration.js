import { useState } from 'react';
import { database } from '../firebase-config';
import { ref, push } from 'firebase/database';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    airline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dbRef = ref(database, 'users');
    await push(dbRef, formData);
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Role</label>
      <select name="designation" value={formData.role} onChange={handleChange} required>
        <option value="">Select Position</option>
        <option value="Pilot">Pilot</option>
        <option value="Cabin Crew">Cabin Crew</option>
        <option value="Engineer">Engineer</option>
        <option value="Ground Staff">Ground Staff</option>
      </select>

      <label>Airline</label>
      <input type="text" name="airline" value={formData.airline} onChange={handleChange} required />

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;