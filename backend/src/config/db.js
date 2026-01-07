const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.warn('Warning: MONGO_URI not set — falling back to mongodb://localhost:27017/yatra_ai');
    }
    await mongoose.connect(uri || 'mongodb://localhost:27017/yatra_ai');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;