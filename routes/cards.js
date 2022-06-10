const cardRouter = require('express').Router();
const {
  getCards,
  deleteCardById,
  postCard,
  putCardLikeById,
  deleteCardLikeById,
} = require('../controllers/cards');

cardRouter.get('/cards', getCards);
cardRouter.delete('/cards/:cardsId', deleteCardById);
cardRouter.post('/cards', postCard);
cardRouter.put('/cards/:cardsId/likes', putCardLikeById);
cardRouter.delete('/cards/:cardsId/likes', deleteCardLikeById);

module.exports = cardRouter;
