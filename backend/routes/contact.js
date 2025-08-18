import { Router } from 'express';
import sendEmail from '../utils/sendEmail.js';

const router = Router();

router.post('/', async (req,res) => {
  const { name, email, message } = req.body || {};
  if(!name || !email || !message){
    return res.status(400).json({ message:'All fields are required' });
  }
  try {
    await sendEmail(name, email, message);
    res.json({ message:'Message sent successfully!' });
  } catch(err){
    console.error('Email send failed', err);
    res.status(500).json({ message:'Failed to send message' });
  }
});

export default router;
