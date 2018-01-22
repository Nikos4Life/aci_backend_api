import express from 'express';
import userService from '../../../services/users';

const router = express.Router();

router.get("/", userService.getUsers);
router.post("/", userService.createUser);

module.exports = router;
