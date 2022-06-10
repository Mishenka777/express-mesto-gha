const cardRouter = require('express').Router();
const {
  getCards,
  deleteCardById,
  postCard,
  putCardLikeById,
  deleteCardLikeById,
} = require('../controllers/cards');

cardRouter.get('/cards', getCards);
cardRouter.delete('/cards/:cardId', deleteCardById);
cardRouter.post('/cards', postCard);
cardRouter.put('/cards/:cardId/likes', putCardLikeById);
cardRouter.delete('/cards/:cardId/likes', deleteCardLikeById);

module.exports = cardRouter;
