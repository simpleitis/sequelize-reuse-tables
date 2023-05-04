const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Group.hasMany(models.Newsies, { foreignKey: 'group_id' })
        }
    }
    Group.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
            zip: DataTypes.STRING,
            city: DataTypes.INTEGER,
            county: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
            notes: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            // options
            sequelize,
            modelName: 'Groups',
            tableName: 'groups',
            underscore: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    )
    return Group
}
