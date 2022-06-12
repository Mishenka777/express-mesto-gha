const cardRouter = require('express').Router();
const {
  getCards,
  deleteCardById,
  postCard,
  putCardLikeById,
  deleteCardLikeById,
} = require('../controllers/cards');

cardRouter.get('/', getCards);
cardRouter.delete('/:cardId', deleteCardById);
cardRouter.post('/', postCard);
cardRouter.put('/:cardId/likes', putCardLikeById);
cardRouter.delete('/:cardId/likes', deleteCardLikeById);

module.exports = cardRouter;
