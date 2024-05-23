const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
{
    sequelize.define("Question",
        {
            id:
            {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            category:
            {
                type: DataTypes.ENUM('Otros', 'Politica', 'Salud', 'Deportes', 'Vida diaria', 'Amor', 'Educación'),
                allowNull: false
            },
            text:
            {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, { createdAt: true, updatedAt: false }
    )
}