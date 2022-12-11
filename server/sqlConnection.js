const mysql = require('mysql2');
//הוספת ספריה המאפשרת להפוך פונקציה רגילה לפרומיס
const util = require('util');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'star_chef',
    multiplesStatements: true
});
//כך הופכים את הפונקציה שמפעילה שאילתא לכזאת שיודעת לחכות לתשובה

const promiseQuery = (sql) => {
    return util.promisify(mysqlConnection.query).call(mysqlConnection, sql);
}
module.exports = {mysqlConnection,promiseQuery};