const ueberdb = require("ueberdb2");
require('dotenv').config()

// MySQL DB connection
const dbFrom = new ueberdb.Database("mysql", {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  engine: process.env.DB_ENGINE,
});

// Dirty DB connection
const dbTo = new ueberdb.Database("dirty", { filename: "dirty.db" });

async function run() {
  await dbFrom.init();
  await dbTo.init();

  dbFrom.findKeys("*", null, async (err, keys) => {
    for (const key of keys) {
      const value = await new Promise((res) => {
        dbFrom.get(key, function (err, value) {
          res(value);
        });
      });

      dbTo.set(key, value);

      console.log(value);
    }
  });
}

try {
  run();
} catch (e) {
  console.log(e);
}
