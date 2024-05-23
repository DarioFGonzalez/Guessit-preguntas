const { Sequelize } = require('sequelize');
const questionModel = require('./Models/Question.js');
const answerModel = require('./Models/Answer.js');

const sequelize = new Sequelize(`postgres://postgres:1Nnercia@localhost:5432/anonymask`, { logging: false, native: false })

sequelize.authenticate()
.then(() =>
{
  console.log('Conexión exitosa');
})
.catch((err) =>
{
  console.error('Error al conectar:', err);
});

// CORE MODELS

questionModel(sequelize);
answerModel(sequelize);

// SEQUELIZE.MODELS

const { Question, Answer } = sequelize.models;

// RELACIONALES

Question.hasMany( Answer, { foreignKey: 'questionId', onDelete: 'CASCADE' } );
Answer.belongsTo( Question, { foreignKey: 'questionId' } );

module.exports = { ...sequelize.models, conn: sequelize };