const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Newsie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Newsie.belongsTo(models.Users, { foreignKey: 'user_id' })
            Newsie.belongsTo(models.Groups, { foreignKey: 'group_id' })
        }
    }
    Newsie.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: DataTypes.INTEGER,
            expiration: DataTypes.DATE,
            group_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            category: DataTypes.STRING,
            sub_category: DataTypes.STRING,
            title: DataTypes.STRING,
            owner_first_name: DataTypes.STRING,
            owner_last_name: DataTypes.STRING,
            event_date: DataTypes.DATE,
            message: DataTypes.STRING,
            photo: DataTypes.STRING,
            url: DataTypes.STRING,
            views: DataTypes.INTEGER,
            sort_date: DataTypes.DATE,
        },
        {
            // options
            sequelize,
            modelName: 'Newsies',
            tableName: 'newsies',
            underscore: true,
            createdAt: false,
            updatedAt: 'sort_date',
        }
    )
    return Newsie
}
