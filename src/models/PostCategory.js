module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    }, { timestamps: false, tableName: 'posts_categories', underscored: true });
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        through: models.PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    
      models.BlogPost.belongsToMany(models.Category, {
        through: models.PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });
    };
    
    return PostCategory;
  };