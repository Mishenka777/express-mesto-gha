const userRouter = require('express').Router();
const {
  getUsers,
  postUser,
  getUserById,
  patchUserInfo,
  patchUserAvatar,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/users/:userId', getUserById);
userRouter.post('/users', postUser);
userRouter.patch('/users/me', patchUserInfo);
userRouter.patch('/users/me/avatar', patchUserAvatar);

module.exports = userRouter;
