import express, { Router } from 'express';
import {
  createCertificate,
  deleteCertificate,
  getCertificates,
  updateCertificate,
} from '../controllers/certificates.controller';
import {
  createCertificateValidation,
  isCertificateExist,
  updateCertificateValidation,
} from '../middlewares/certificates.middleware';
import upload from '../middlewares/multer.middleware';

const router: Router = express.Router();

router
  .route('/')
  .post(
    upload.single('image'),
    isCertificateExist(true),
    createCertificateValidation,
    createCertificate,
  );

router
  .route('/:id')
  .put(
    upload.single('image'),
    isCertificateExist(false),
    updateCertificateValidation,
    updateCertificate,
  );

router.route('/').get(getCertificates);

router.route('/:id').delete(deleteCertificate);

export default router;
