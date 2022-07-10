import express from 'express';
import cors from 'cors';
import contact from './../contact/contact-routes';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.use('/contact', contact);

export default router;
