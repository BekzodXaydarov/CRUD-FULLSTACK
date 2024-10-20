const bcrypt = require("bcrypt")
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    User.beforeSave(async (user, option) => {
        if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password,10)
        }
    })
    return User
}