const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const { database, user, password, host, dialect } = process.env
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
  logging: false
})

sequelize.authenticate().then(r => console.log('CONECTADO COM SUCESSO AO BANCO DE DADOS')).catch(r => console.error('FALHA AO SE CONECTAR COM O BANCO DE DADOS, VERIFIQUE SE AS VARIAVEIS ESTAO CORRETAS NO ARQUIVO .env'))

module.exports = sequelize