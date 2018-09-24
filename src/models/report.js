import mongoose, { Schema } from 'mongoose';

// Define report schema
const reportSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: new Date(),
    required: true,
  },
  position: {
    type: [Number],
    index: '2d',
    required: true,
  },
});

// Export Mongoose model
export default mongoose.model('report', reportSchema);
