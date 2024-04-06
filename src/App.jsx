import React, { useState } from 'react';
import './App.css'; // Import CSS file

const App = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [ticketTopic, setTicketTopic] = useState('');
  const [examGrade, setExamGrade] = useState('');
  const [ratingGrade, setRatingGrade] = useState('');
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [students, setStudents] = useState([]);
  const [toasterMessage, setToasterMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !name || !ticketNumber || !ticketTopic || !examGrade || !ratingGrade) {
      setError('Please fill in all required fields.');
      return;
    }
    const newStudent = {
      id,
      name,
      ticketNumber,
      ticketTopic,
      examGrade,
      ratingGrade,
      comments
    };
    setStudents([...students, newStudent]);
    setSubmitted(true);
    setId('');
    setName('');
    setTicketNumber('');
    setTicketTopic('');
    setExamGrade('');
    setRatingGrade('');
    setComments('');
    setError('');
    setToasterMessage('Student data submitted successfully!');
    setTimeout(() => {
      setToasterMessage('');
    }, 3000);
  };

  const handleViewStatistics = () => {
    setShowStatistics(true);
  };

  return (
    <div>
      <header>
        <h1>Student Management System</h1>
      </header>
      <div className="container">
        <div className="form-container">
          <h2>Student Management</h2>
         
          {error && <p className="error-message">{error}</p>}
          {toasterMessage && <p className="toaster">{toasterMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID *" />
            </div>
            <div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name *" />
            </div>
            <div>
              <input type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Ticket's Number *" />
            </div>
            <div>
              <input type="text" value={ticketTopic} onChange={(e) => setTicketTopic(e.target.value)} placeholder="Ticket's Topic *" />
            </div>
            <div>
              <input type="number" value={examGrade} onChange={(e) => setExamGrade(e.target.value)} placeholder="Exam Grade *" />
            </div>
            <div>
              <input type="number" value={ratingGrade} onChange={(e) => setRatingGrade(e.target.value)} placeholder="Rating Grade *" />
            </div>
            <div>
              <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments" />
            </div>
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleViewStatistics}>View Statistics</button>
        </div>
      </div>
      {showStatistics && (
        <div className="statistics-container">
          <h2>Student Statistics</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Ticket's Number</th>
                <th>Ticket's Topic</th>
                <th>Exam Grade</th>
                <th>Rating Grade</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.ticketNumber}</td>
                  <td>{student.ticketTopic}</td>
                  <td>{student.examGrade}</td>
                  <td>{student.ratingGrade}</td>
                  <td>{student.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* <footer>
        <p>&copy; 2024 phaneendra-nikhil. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default App;
