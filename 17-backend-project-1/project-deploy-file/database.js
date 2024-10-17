/*
 * Title: Mongoose Connection with Mongo Atlas
 * Description: ClientOptions Object Containing server API configuration.
 * Author: Istiak Ahammad
 * Date: 8/12/2024
 *
 */

/**
 * node modules
 **/
const mongoose = require("mongoose");

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
  dbName: "MindScribe",
};

/**
 * Connects to the MongoDB database using provided connection string.
 **/

const connectDB = async (connectionURL) => {
  try {
    await mongoose.connect(connectionURL, clientOptions);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
    throw Error(error.message);
  }
};

/**
 * Disconnect from the MongoDB database.
 **/

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnect from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from mongodb", error.message);
    throw error;
  }
};

module.exports = { connectDB, disconnectDB };

//2nd //////////////////////////////////////////////////////////
//MongoDB Database connection.......
/* let URI = "mongodb://127.0.0.1:27017/studentID";
let OPTION = { user: " ", pass: " " };
mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB is connnected");
  })
  .catch((err) => {
    console.log("Database Error", err);
  }); */

//...................................................................
/* let MONGODB_CONNECTION = "mongodb://127.0.0.1:27017/studentID";
mongoose
  .connect(MONGODB_CONNECTION)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Error", err);
  }); */

//........................................................
/* let URI = "mongodb://127.0.0.1:27017/studentID";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  }); */

//1. try......catch.....
/* const connectDB = async (connectionURL) => {
  try {
    await mongoose.connect(connectionURL, clientOptions);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
    throw Error(error.message);
  }
}; */

/*
 * Title: Mongoose Connection with Mongo Atlas
 * Description: ClientOptions Object Containing server API configuration.
 * Author: Istiak Ahammad
 * Date: 8/12/2024
 *
 */

/**
 * node modules
 **/
/* const mongoose = require("mongoose");

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
  dbName:"MindScribe"
}; */

/**
 * Connects to the MongoDB database using provided connection string.
 **/

/* const connectDB = async (connectionURL) => {
  try {
    await mongoose.connect(connectionURL, clientOptions);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.error("Error connecting to mongodb", error.message);
    throw Error(error.message);
  }
}; */

/**
 * Disconnect from the MongoDB database.
 **/

/* const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnect from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from mongodb", error.message);
    throw error;
  }
}; 

module.exports = { connectDB, disconnectDB };*/
