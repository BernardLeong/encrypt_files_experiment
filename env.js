// const dotenv = require('dotenv').config();
const customEnv = require('custom-env').env('staging')

const { PORT, DB_HOST, APP_ENV, KEY_PATH } = process.env

// console.log(PORT)

module.exports = {
    PORT: PORT,
    DB_HOST: DB_HOST,
    APP_ENV: APP_ENV,
    KEY_PATH: KEY_PATH
}
