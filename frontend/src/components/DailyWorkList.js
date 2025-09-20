import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DailyWorkList() {
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dailywork')
      .then(res => setWorkList(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Daily Work Entries</h2>
      <ul>
        {workList.map(work => (
          <li key={work.id}>
            <strong>{work.project_name}</strong>: {work.description_project}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyWorkList;
