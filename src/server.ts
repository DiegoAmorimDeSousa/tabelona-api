import { connectDB } from './infrastructure/config/database';
import app from './app';
import logger from './utils/logger';

const PORT = process.env.PORT || 3001;

connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  logger.error(`Error connecting to MongoDB: ${err.message} | Stack: ${err.stack}`);
});
