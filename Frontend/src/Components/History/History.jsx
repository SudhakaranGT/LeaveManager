import React, { useState, useEffect } from 'react';
import './history.css';
import { useParams } from 'react-router-dom';

const History = () => {
  const { id } = useParams();
  const [leaves, setLeaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/leaves.json`) 
      .then((res) => res.json())
      .then((data) => {
        setLeaves(data);
        setIsLoading(false);
      });
  }, [id]); 

  return (
    <section className='section-container'>
      <h1 className='leave-head'>My <span>Leaves</span></h1>
      <div className='full-width-xl'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className='data-table'>
            <thead>
              <tr>
                <th>Reason</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Type</th>
                <th>Time</th>
                <th>View and Edit</th>
                <th>Delete</th>
                
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.reason}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.type}</td> 
                  <td>{leave.time}</td> 
                  <td>
                    <a href={`edit/${index}`}>View</a> 
                  </td>
                  <td>
                    <a href={`delete/${index}`}>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default History;
