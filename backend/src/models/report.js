import mongoose, { Schema } from 'mongoose';

/**
 * A report is a timed gospatial record
 */
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
    type: {
      type: String,
      required: true,
    },
    coordinates: [],
  },
});

// Add 2dsphere index
reportSchema.index({ position: '2dsphere' });

// Export Mongoose model
export default mongoose.model('reports', reportSchema);
