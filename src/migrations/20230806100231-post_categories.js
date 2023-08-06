'use strict';

 module.exports = {
   up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('posts_categories', {
       post_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
         field: 'post_id',
         primaryKey: true,
         references: {
           model: 'blog_posts',
           key: 'id'
         }
       },
       category_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
         field: 'category_id',
         primaryKey: true,
         references: {
           model: 'categories',
           key: 'id'
         }
       }
   });
   },

   down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('post_categories');
   }
 };