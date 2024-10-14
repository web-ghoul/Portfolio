import mongoose, { Schema } from 'mongoose';
import { ChatTypes } from '../types/models.types';

const ChatSchema: Schema<ChatTypes> = new Schema<ChatTypes>(
  {
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
    chatter: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export default mongoose.model<ChatTypes>('Chat', ChatSchema);
