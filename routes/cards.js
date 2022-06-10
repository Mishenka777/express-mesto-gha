const cardRouter = require('express').Router();
const {
  getCards,
  deleteCardById,
  postCard,
  putCardLikeById,
  deleteCardLikeById,
} = require('../controllers/cards');

cardRouter.get('/users', getCards);
cardRouter.delete('/users/:userId', deleteCardById);
cardRouter.post('/users', postCard);
cardRouter.put('/cards/:cardId/likes', putCardLikeById);
cardRouter.delete('/cards/:cardId/likes', deleteCardLikeById);

module.exports = cardRouter;
