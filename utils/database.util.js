const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'M@ria1005',
    port: 5432,
    database: 'checkInCheckOut',
    logging: false
})

module.exports = { db, DataTypes }