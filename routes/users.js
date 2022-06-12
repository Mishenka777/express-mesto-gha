const userRouter = require('express').Router();
const {
  getUsers,
  postUser,
  getUserById,
  patchUserInfo,
  patchUserAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserById);
userRouter.post('/', postUser);
userRouter.patch('/me', patchUserInfo);
userRouter.patch('/me/avatar', patchUserAvatar);

module.exports = userRouter;
