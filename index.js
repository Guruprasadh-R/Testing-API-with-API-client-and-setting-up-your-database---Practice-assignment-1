// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

// Use bodyParser to parse JSON request bodies
app.use(bodyParser.json());

// Example student data
const students = [
    { student_id: "1", name: "Alice Johnson", total: 433 },
    { student_id: "2", name: "Bob Smith", total: 410 },
    { student_id: "3", name: "Charlie Davis", total: 390 }
];

// POST endpoint to retrieve students above the threshold
app.post('/students/above-threshold', (req, res) => {
    const { threshold } = req.body;

    // Check if the threshold is a number
    if (typeof threshold !== 'number') {
        return res.status(400).json({ error: "Threshold must be a number" });
    }

    // Filter students based on the threshold
    const filteredStudents = students.filter(student => student.total > threshold);
    
    // Send the response
    res.json({
        count: filteredStudents.length,
        students: filteredStudents
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
