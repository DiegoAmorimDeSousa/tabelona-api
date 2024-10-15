import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../../utils/logger';

dotenv.config();

const MONGO_URI = process.env.MONGO_URL || '';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info('Connected to MongoDB')
  } catch (error) {
    logger.error(`Error connecting to MongoDB:  ${error}`);
    process.exit(1);
  }
};
