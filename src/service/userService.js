import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

var salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password);

    // simple query
    connection.query(
        'INSERT INTO users (email,password,username) VALUES(?,?,?)', [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    );
}


const getUserList = () => {
    let users = [];
    connection.query(
        'SELECT * FROM users ',
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log("Check Result:  ", results)
        }
    );
}

module.exports = {
    createNewUser, getUserList,
}