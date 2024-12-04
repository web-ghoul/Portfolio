import mongoose, { Schema } from 'mongoose';
import { CertificateTypes } from '../types/models.types';

const CertificateSchema: Schema<CertificateTypes> =
  new Schema<CertificateTypes>(
    {
      title: {
        type: String,
        required: [true, 'Certificate title is required'],
        unique: true,
      },
      image: {
        type: String,
        required: [true, 'Certificate image is required'],
      },
    },
    { timestamps: true },
  );

export default mongoose.model<CertificateTypes>(
  'Certificate',
  CertificateSchema,
);
