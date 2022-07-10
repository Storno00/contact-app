import express from 'express';
import cors from 'cors';
import ContactController from './contact-controller';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/', ContactController.post);

export default router;