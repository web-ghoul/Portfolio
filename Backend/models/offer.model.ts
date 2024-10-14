import mongoose, { Schema } from 'mongoose';
import { OfferTypes } from '../types/models.types';

const OfferSchema: Schema<OfferTypes> = new Schema<OfferTypes>(
  {
    type: {
      type: String,
      required: [true, 'Project Type is required'],
    },
    badget: {
      type: String,
      required: [true, 'Badget is required'],
    },
    time: {
      type: String,
      required: [true, 'Estimate Time is required'],
    },
    client: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export default mongoose.model<OfferTypes>('Offer', OfferSchema);
