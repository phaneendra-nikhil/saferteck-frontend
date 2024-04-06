import React, { useState } from "react";
import "./App.css"; // Import CSS file

const App = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [ticketTopic, setTicketTopic] = useState("");
  const [examGrade, setExamGrade] = useState("");
  const [ratingGrade, setRatingGrade] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [toasterMessage, setToasterMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !id ||
      !name ||
      !ticketNumber ||
      !ticketTopic ||
      !examGrade ||
      !ratingGrade
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // Calculate final grade and determine status
    const finalGrade =
      0.6 * parseFloat(examGrade) + 0.4 * parseFloat(ratingGrade);
    const status = finalGrade > 4 ? "passed" : "failed";

    const newStudent = {
      id,
      name,
      ticketNumber,
      ticketTopic,
      examGrade,
      ratingGrade,
      comments,
      finalGrade,
      status,
    };

    setStudents([...students, newStudent]);
    setSubmitted(true);
    setId("");
    setName("");
    setTicketNumber("");
    setTicketTopic("");
    setExamGrade("");
    setRatingGrade("");
    setComments("");
    setError("");
    setToasterMessage("Student data submitted successfully!");
    setTimeout(() => {
      setToasterMessage("");
    }, 3000);
  };

  const handleViewStatistics = () => {
    setShowStatistics(true);
  };

  const handleViewStatus = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <header>
        <h1>Student Management System</h1>
      </header>
      <div className="container">
      <div className="additional-info-box">
        <div className="additional-info">
          <h3>Information</h3>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Professor: M. Jogendra Kumar</p>
          <p>Department: Computer Science</p>
          <p>Group: Front-end  Development</p>
          <p>College: KL University</p>
          <p>Semester: 6th Semester</p>
        </div>
      </div>
        <div className="form-container">
          <h2>Student Management</h2>

          {error && <p className="error-message">{error}</p>}
          {toasterMessage && <p className="toaster">{toasterMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID *"
              />
            </div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name *"
              />
            </div>
            <div>
              <input
                type="text"
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
                placeholder="Ticket's Number *"
              />
            </div>
            <div>
              <input
                type="text"
                value={ticketTopic}
                onChange={(e) => setTicketTopic(e.target.value)}
                placeholder="Ticket's Topic *"
              />
            </div>
            <div>
              <input
                type="number"
                value={examGrade}
                onChange={(e) => setExamGrade(e.target.value)}
                placeholder="Exam Grade *"
              />
            </div>
            <div>
              <input
                type="number"
                value={ratingGrade}
                onChange={(e) => setRatingGrade(e.target.value)}
                placeholder="Rating Grade *"
              />
            </div>
            <div>
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments"
              />
            </div>
            <button type="submit">Add Student</button>
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
                <th>Final Grade</th>
                <th>Status</th>
                <th>Action</th>
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
                  <td>{student.finalGrade.toFixed(2)}</td>
                  <td
                    style={{
                      backgroundColor:
                        student.status === "passed" ? "green" : "red",
                      color: "white",
                    }}
                  >
                    {student.status}
                  </td>
                  <td>
                    <button onClick={() => handleViewStatus(student)}>
                      View Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedStudent && (
            <div className="bill-format">
              <h2>Report Card for {selectedStudent.name}</h2>
              <div className="report-card">
                <div className="report-card-item">
                  <p className="report-card-item-title">ID:</p>
                  <p>{selectedStudent.id}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Name:</p>
                  <p>{selectedStudent.name}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Ticket's Number:</p>
                  <p>{selectedStudent.ticketNumber}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Ticket's Topic:</p>
                  <p>{selectedStudent.ticketTopic}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Exam Grade:</p>
                  <p>{selectedStudent.examGrade}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Rating Grade:</p>
                  <p>{selectedStudent.ratingGrade}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Comments:</p>
                  <p>{selectedStudent.comments}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Final Grade:</p>
                  <p>{selectedStudent.finalGrade.toFixed(2)}</p>
                </div>
                <div className="report-card-item">
                  <p className="report-card-item-title">Status:</p>
                  <p>{selectedStudent.status}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <footer>
        <p>&copy; {new Date().getFullYear()} Phaneendra-nikhil. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
