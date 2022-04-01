import express from 'express';
import { onlyAuthorized } from '../utils/middleware';
import { Comment } from '../models/Comment';

const commentRouter = express.Router();

commentRouter.route('/')
  .post(onlyAuthorized, async (req, res) => {
    const { message, type, drop } = req.body;

    const comments = await Comment.create({
      author: res.user?._id,
      message,
      type,
      drop,
    })

    res.json(comments);
  })

export default commentRouter;
