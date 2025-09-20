import React, { useState } from 'react';
import axios from 'axios';

function AddDailyWorkForm() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/dailywork', {
      project_name: projectName,
      description_project: description
    })
    .then(res => {
      setProjectName('');
      setDescription('');
      alert('Entry added!');
    })
    .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Entry</h2>
      <input 
        type="text" 
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
      />
      <br />
      <textarea 
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddDailyWorkForm;
