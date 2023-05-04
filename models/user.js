const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Newsies, { foreignKey: 'user_id' })
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: DataTypes.INTEGER,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.INTEGER,
            password: DataTypes.STRING,
            group_id: DataTypes.INTEGER,
            inviter_id: DataTypes.INTEGER,
            state_id: DataTypes.INTEGER,
            role: DataTypes.INTEGER,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            // options
            sequelize,
            modelName: 'Users',
            tableName: 'users',
            underscore: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    )
    return User
}
