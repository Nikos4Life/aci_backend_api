import express from 'express';
import usersController from '../../../controllers/api/users/user.controller';

const router = express.Router();

router.use("/users", usersController);

module.exports = router;
