const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./tasks.db", (err) => {
  if (err) {
    console.error("Database connection error: " + err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        dueDate TEXT,
        createDate TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);
  });

module.exports = db;
