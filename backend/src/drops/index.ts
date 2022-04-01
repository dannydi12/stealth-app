import express from 'express';
import { onlyAuthorized } from '../utils/middleware';
import { Drop } from '../models/Drop';
import { Comment } from '../models/Comment';

const dropRouter = express.Router();

dropRouter.route('/')
  .get(onlyAuthorized, async (req, res) => {
    const { currentCoordinates } = req.query;
    const goodArray = (currentCoordinates as any)?.map((corr: any) => parseInt(corr, 10))
    console.log(goodArray, 'good')
    // const drops = await Drop.aggregate([
    //   {
    //     $geoNear: {
    //       near: { type: 'Point', coordinates: goodArray as any },
    //       distanceField: 'dist.calculated',
    //       // maxDistance: 1000,
    //       // query: { category: 'Parks' },
    //       includeLocs: 'dist.location',
    //       spherical: true,
    //     },
    //   },
    // ]);

    const drops = await Drop.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [-122.5, 37.1],
          },
          $maxDistance: 500,
        },
      },
    })

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
