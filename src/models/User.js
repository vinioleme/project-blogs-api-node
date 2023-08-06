const UserSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: {
            type: DataTypes.STRING,
            defaultValue: null,
        }
    }, 
    {
        tableName: 'users',
        underscored: true,
        timestamps: false,
    });

    User.associate = ({ BlogPost }) => {
        User.hasMany(BlogPost,
          { foreignKey: 'userId', as: 'blog_posts' });
      };

    return User;
}

module.exports = UserSchema;