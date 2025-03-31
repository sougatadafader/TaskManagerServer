const express = require("express");
const cors = require("cors");
const db = require("../database/db");
const app = express();
app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/api/tasks", (req, res) => {
    db.all("SELECT * FROM tasks ORDER BY createDate DESC", [], (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  })

// Create a new task
app.post("/api/tasks", (req, res) => {
    const { title, description, dueDate } = req.body;
  
    // Insert the new task into the database
    db.run(
      "INSERT INTO tasks (title, description, dueDate, createDate) VALUES (?, ?, ?, CURRENT_TIMESTAMP)",
      [title, description, dueDate],
      function (err) {
        if (err) {
          res.status(400).json({ error: err.message });
        } else {
          // Respond with the created task details
          res.json({
            id: this.lastID,
            title,
            description,
            dueDate,
            createDate: new Date().toISOString() // Sending the creation date in ISO format
          });
        }
      }
    );
  });

// Update a task
app.put("/api/tasks/:id", (req, res) => {
    const { title, description, dueDate } = req.body;
    const updateFields = { title, description, dueDate };
    const updates = [];
    const values = [];
  
    // Build dynamic SQL query based on non-null fields
    Object.keys(updateFields).forEach((field) => {
      if (updateFields[field] !== undefined) {
        updates.push(`${field} = ?`);
        values.push(updateFields[field]);
      }
    });
  
    // If no fields to update, return an error
    if (updates.length === 0) {
      return res.status(400).json({ error: "At least one field (title, description, dueDate) must be provided for update." });
    }
  
    // Build final SQL query
    const query = `UPDATE tasks SET ${updates.join(", ")} WHERE id = ?`;
    values.push(req.params.id); // Add task ID to the values array
  
    // Execute the update query
    db.run(query, values, function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      // Send response with the number of rows updated
      res.json({ updated: this.changes });
    });
  });
  

// Delete a task
app.delete("/api/tasks/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id = ?", [req.params.id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ deleted: this.changes });
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
