//import models
const User = require('./User');
const Patients = require('./Patients');
const Providers = require('./Providers');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Patients, {
    foreignKey: 'user_id',
});

User.hasMany(Providers, {
    foreignKey: 'user_id',
});

Patients.belongsTo(User, {
    foreignKey: 'user_id'
});

Providers.belongsTo(User, {
    foreignKey: 'user_id'
});

Providers.hasMany(Patients, {
    foreignKey: 'providers_id'
});

Patients.belongsTo(Providers, {
    foreignKey: 'providers_id'
});

module.exports = { User, Post, Comment, Patients, Providers};

