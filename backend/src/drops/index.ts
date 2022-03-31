import express from 'express';
import { onlyAuthorized } from '../middleware';
import { Drop } from '../models/Drop';

const dropRouter = express.Router();
const mainRoute = dropRouter.route('/');

mainRoute.get(onlyAuthorized, async (req, res) => {
  try {
    const { currentCoordinates } = req.body;

    const drops = await Drop.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: currentCoordinates },
          distanceField: 'dist.calculated',
          maxDistance: 2,
          // query: { category: 'Parks' },
          includeLocs: 'dist.location',
          spherical: true,
        },
      },
    ])

    res.json(drops);
  } catch (err) {
    res.status(500).send((err as any).message);
  }
});

mainRoute.post(onlyAuthorized, async (req, res) => {
  try {
    const { message, type, coordinates } = req.body;

    const drop = await Drop.create({
      message,
      type,
      location: {
        type: 'Point',
        coordinates,
      },
    });

    res.json(drop);
  } catch (err) {
    res.status(500).send((err as any).message);
  }
});

export default dropRouter;
