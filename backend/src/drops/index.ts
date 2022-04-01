import express from 'express';
import { onlyAuthorized } from '../utils/middleware';
import { Drop } from '../models/Drop';
import { Comment } from '../models/Comment';

const dropRouter = express.Router();

dropRouter.route('/')
  .get(onlyAuthorized, async (req, res) => {
    const { currentCoordinates } = req.query;

    const drops = await Drop.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: currentCoordinates as any },
          distanceField: 'dist.calculated',
          // maxDistance: 1000,
          // query: { category: 'Parks' },
          includeLocs: 'dist.location',
          spherical: true,
        },
      },
    ]);

    res.json(drops);
  })
  .post(onlyAuthorized, async (req, res) => {
    const { message, type, coordinates } = req.body;

    const drop = await Drop.create({
      author: res.user?._id,
      message,
      type,
      location: {
        type: 'Point',
        coordinates,
      },
    });

    res.status(201).json(drop);
  });

dropRouter.route('/:id')
  .get(onlyAuthorized, async (req, res) => {
    const { id } = req.params;
    const drop = await Drop.findById(id).populate('author').lean()

    const comments = await Comment.find({ drop: id }).populate('author')

    res.json({ ...drop, comments });
  });

export default dropRouter;
