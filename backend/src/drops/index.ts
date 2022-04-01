import express from 'express';
import { onlyAuthorized } from '../utils/middleware';
import { Drop } from '../models/Drop';
import { Comment } from '../models/Comment';

const dropRouter = express.Router();

// get all
dropRouter.route('/')
  .get(async (req, res) => {
    const { currentCoordinates } = req.query;

    if (!currentCoordinates) {
      res.status(201).json([])
      return
    }

    const goodArray = (currentCoordinates as any)?.map((corr: any) => parseInt(corr, 10))
    console.log(goodArray, 'good')
    const drops = await Drop.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: goodArray as any },
          distanceField: 'dist.calculated',
          // maxDistance: 1000,
          // query: { category: 'Parks' },
          includeLocs: 'dist.location',
          spherical: true,
        },
      },
      {
        $lookup: {
          from: 'users',
          as: 'author',
          let: { authorId: '$author' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$_id', '$$authorId'] },
                  ],
                },
              },
            },
          ],
        },
      },
      { $unwind: '$author' },
    ]);

    // const drops = await Drop.find({
    //   location: {
    //     $nearSphere: {
    //       $geometry: {
    //         type: 'Point',
    //         coordinates: goodArray,
    //       },
    //       $maxDistance: 10000,
    //     },
    //   },
    // })

    console.log(drops)

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

// get specific drop by id
dropRouter.route('/:id')
  .get(onlyAuthorized, async (req, res) => {
    const { id } = req.params;
    const drop = await Drop.findById(id).populate('author').lean()

    const comments = await Comment.find({ drop: id }).populate('author')
    console.log(comments)
    res.json({ ...drop, comments });
  });

export default dropRouter;
