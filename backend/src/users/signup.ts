import express from 'express'

const signupRouter = express.Router();
const bodyParser = express.json();

signupRouter.route('/').get(bodyParser, (req, res) => {
  res.send('hey!')
})

export default signupRouter