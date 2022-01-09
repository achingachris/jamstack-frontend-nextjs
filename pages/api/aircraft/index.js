const aircraft = require('./aircrafts.json')

export default function handler(req, res) {
  res.status(200).json(aircraft)
}
