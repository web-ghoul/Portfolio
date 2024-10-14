import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const dbConnection = (): void => {
  mongoose
    .connect(`${process.env.DB}`)
    .then(conn => {
      console.log(`Database Connected: ${conn.connection.host}`);
    })
    .catch(err => {
      console.error(`Database Error: ${err}`);
      process.exit(1);
    });
};

export default dbConnection;
