import express from 'express';
import cors from 'cors';
import ContactController from './contact-controller';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/:contactId', ContactController.get);
router.post('/', ContactController.post);
router.patch('/:contactId', ContactController.patch);
router.delete('/:contactId', ContactController.delete);

export default router;