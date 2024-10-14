import mongoose, { Schema } from 'mongoose';
import { TestimonialTypes } from '../types/models.types';

const TestimonialSchema: Schema<TestimonialTypes> =
  new Schema<TestimonialTypes>(
    {
      content: {
        type: String,
        required: [true, 'Content is required'],
      },
      client: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Creator is required'],
      },
    },
    { timestamps: true },
  );

export default mongoose.model<TestimonialTypes>(
  'Testimonial',
  TestimonialSchema,
);
