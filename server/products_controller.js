module.exports = {
  create(req, res, next) {
    const dbInstance = req.app.get('db');
    const { name, description, price, image_url } = req.body; 

    dbInstance.create_product([name, description, price, image_url])
    .then( products => res.status(200).json(products))
    .catch(err => {
      res.status(500).json({errorMessage: "Server error"});
      console.log('err: ', err);
    });
  },

  getOne(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.read_product([req.params.id])
    .then(product => res.status(200).json(product))
    .catch(err => {
      res.status(500).json({errorMessage: "Server error"});
      console.log('err: ', err);
    });
  },

  getAll(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
    .then(products => res.status(200).json(products))
    .catch(err => {
      res.status(500).json({errorMessage: "Server Error."});
      console.log('err: ', err);
    });
  },

  update(req, res, next) {
    const dbInstance = req.app.get('db');
    
    dbInstance.update_product([req.params.id,req.query.desc])
    .then(product => res.status(200).json(product))
    .catch(err => {
      res.status(500).json({errorMessage: "Server Error."});
      console.log('err: ', err);
    });
  },

  remove(req, res, next) {
    const dbInstance = req.app.get('db');
    dbInstance.delete_product(req.params.id)
    .then(products => res.status(200).json(products))
    .catch(err => {
      res.status(500).json({errorMessage: "Server Error."});
      console.log('err: ', err);
    });
  }
}