import express from 'express';
import { onlyAuthorized } from '../middleware';
import { Drop } from '../models/Drop';

const dropRouter = express.Router();
const mainRoute = dropRouter.route('/');

mainRoute.get(onlyAuthorized, async (req, res) => {
  try {
    const { currentCoordinates } = req.body;

    const drops = await Drop.find({
      location: {
        $near: { type: 'Point', coordinates: currentCoordinates },
        $minDistance: 0,
        maxDistance: 20,
      },
    })

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
