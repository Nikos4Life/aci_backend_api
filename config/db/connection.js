import mongoose from 'mongoose';

let options = {};

function connectToDB(env, app) {
  if (env === "production") {
    options = {
      user: process.env.MLAB_USER,
      pass: process.env.MLAB_PASSWORD,
      useMongoClient: true
    };
    mongoose.connect(
      "mongodb://" +
        process.env.MLAB_HOST +
        ":" +
        process.env.MLAB_PORT +
        "/" +
        process.env.LOCAL_DB_NAME,
      options
    );
    mongoose.Promise = Promise;
    app.set("mongooseClient", mongoose);
    console.log("Connected to MLAB DB.");
  } else {
    options = {
      useMongoClient: true
    };
    mongoose.connect(
      "mongodb://" +
        process.env.LOCAL_DB_HOST +
        ":" +
        process.env.LOCAL_DB_PORT +
        "/" +
        process.env.LOCAL_DB_NAME,
      options
    );
    mongoose.Promise = global.Promise;
    app.set("mongooseClient", mongoose);
  }
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function(callback) {
    console.log("Connected to Database: " + db.db.s.databaseName);
  });
}
module.exports = {
  connectToDB: connectToDB
};
