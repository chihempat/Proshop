import express from 'express';
import multer from 'multer';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

router.route('/')
  .post(registerUser)
  .get(protect, admin, getUsers);



export default router;
