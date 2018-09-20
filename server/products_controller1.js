module.exports = {
  create(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.create_product()
    .then( () => res.sendStatus(200))
    .catch(err => {
      res.status(500).json({errorMessage: "Server error"});
      console.log('err: ', err);
    });
  },

  getOne(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.read_product()
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).json({errorMessage: "Server error"});
      console.log('err: ', err);
    });
  },

  getAll(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).json({errorMessage: "Server Error."});
      console.log('err: ', err);
    });
  },

  update(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.update_product()
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).json({errorMessage: "Server Error."});
      console.log('err: ', err);
    });
  },

  remove(req, res, next) {
    const dbInstance = req.app.get('db');
    
    dbInstance.delete_product([ params.id ])
    // .then(() => res.sendStatus(200))
    .then(products => res.status(200).json(products))
    .catch(err => {
      res.status(500).json({errorMessage: "Server Error."});
      console.log('err: ', err);
    });
  }
}