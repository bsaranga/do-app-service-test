const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/store.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the store database.');

    // initialize table
    db.run(`
        CREATE TABLE IF NOT EXISTS user_actions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT
        )
    `);
  }
});

module.exports = db;