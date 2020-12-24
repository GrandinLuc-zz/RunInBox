const dbUtil = require('./db-utils')

dbUtil.getDb()
  .then(db => {
    db.prop = 'value'
    return db
  })
  .then(db => dbUtil.saveDb(db))
  .catch(error => {
      console.log(error)
  })
