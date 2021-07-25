//import sequelize
var Sequelize = require("sequelize");
// bcrypt will encrypt the password once its stored
var bcrypt = require("bcript");
// database, username, pasword
const sequelize = new Sequelize ("ourDatabase", "root", "password", {
    host: "localhost",
    port: 3001,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operationAliases: false
});

// set up user table so we don't have to create sequele queries
// create table called user defined by 
const user = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
    type: SequelizeSTRING,
    unique: true,
    allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// before a user is created we want the pasword to be encrypted
//create function that accepts user name and options as input
user.beforCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
//user password = bcrypt hashing password+salt
    user.password = bcrypt.hashSync(user.password, salt);
});

//validate pasword
//decrypt given password then compare with stored encrypted password in database
user.prototype.valipassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

//create tables
sequelize.Sync()
    .then(() => console.log('user tables has been created'))
    .catch(error => console.log('this error occured', error));
//the sync will be called each time we enter a user into the database
module.export = User;
