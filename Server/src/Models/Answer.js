const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
{
    sequelize.define("Answer",
        {
            id:
            {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            text:
            {
                type: DataTypes.STRING,
                allowNull: false,
            },
            questionId:
            {
                type: DataTypes.UUID,
                foreignKey: true,
                allowNull: true,
            }
        }, { createdAt: true, updatedAt: false }
    )
}