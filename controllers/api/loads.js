const Load = require('../../models/load')

const dataController = {
  // Index,
  index (req, res, next) {
    Load.find({}, (err, foundLoads) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.loads = foundLoads
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Load.findByIdAndDelete(req.params.id, (err, deletedLoad) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.load = deletedLoad
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.readyToLoad = req.body.readyToLoad === 'on'
    Load.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLoad) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.load = updatedLoad
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.readyToLoad = req.body.readyToLoad === 'on'
   
    Load.create(req.body, (err, createdLoad) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.load = createdLoad
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Load.findById(req.params.id, (err, foundLoad) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a load with that ID'
        })
      } else {
        res.locals.data.load = foundLoad
        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.loads)
    },
    show (req, res, next) {
      res.json(res.locals.data.load)
    }
  }

module.exports = { dataController, apiController }
