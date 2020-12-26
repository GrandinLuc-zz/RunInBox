const fs = require('fs') // Module intégré à node, inutile de l’installer
const util = require('util')
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

const dbFile = './src/users.json'

// Fonction qui prend un objet, le transforme en string
// et enregiste cette string dans un fichier JSON lisible par un humain,
// et qui retourne une promesse (promise)
const saveDb = (db) => writeFile(dbFile, JSON.stringify(db, null, '  '))

// Fonction qui retourne une promesse, avec la base de données entière sous forme d’objet dans la promesse
const getDb = () => readFile(dbFile).then(str => JSON.parse(str))

module.exports = {
  saveDb,
  getDb,
}

