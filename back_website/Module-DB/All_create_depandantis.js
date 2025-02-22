const { query_DB } = require("./index")
require('dotenv').config();
const mysqul = require("mysql2/promise")

class All_create_dependencis_class { 
    static #pool;
    static Getconnection = async () => {
        if (!All_create_dependencis_class.#pool) {
            try {
                All_create_dependencis_class.#pool = await mysqul.createConnection(query_DB);
            } catch (e) { console.log("connection database is error : \n" + e) }

            try {
                await All_create_dependencis_class.#pool.query(`USE ${process.env.NAME_DATABASE}`);
            } catch (e) {
                console.log("database is not defined plece run route aggen : \n" + e)
            }
        }
        return All_create_dependencis_class.#pool;
    }

    static query = (sql, params) => {
        return All_create_dependencis_class.Getconnection().then((value) => {
            return value.query(sql, params ?? []).then((Value_create_DB) => {
                return Value_create_DB
            }).catch((e) => {
                console.log("error excute query in method query in class All_create_dependencis : \n ")
                return e.sqlMessage;
            })

        })
    }

    static CREATE_DATABASE = () => {
        All_create_dependencis_class.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.NAME_DATABASE}`).then((value) => {
            value[0].fieldCount === 0 ? console.log("create Database successfully ...!!!") : console.log("error create Database ...!!!", value)
        })
    }

    static CREATE_TABALE_REGESTER = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS regester (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "username VARCHAR(50) NOT NULL," +
            "password VARCHAR(255) NOT NULL," +
            "phonenumber VARCHAR(20)," +
            "email VARCHAR(100)" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table regester successfully ...!!!") : console.log("error create table Regester ...!!!", value_create_regeste_table)
        })
    }

    static CREATE_TABALE_REGESTER_VALIDATION = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS regester_validation (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "username VARCHAR(50) NOT NULL," +
            "password VARCHAR(255) NOT NULL," +
            "phonenumber VARCHAR(20)," +
            "email VARCHAR(100)" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table regester_validation successfully ...!!!") : console.log("error create table Regester ...!!!", value_create_regeste_table)
        })
    }


    static CREATE_TABALE_PANT_ORDER = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS pant_order (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "ghad_shalvar INT(100) NOT NULL," +
            "kamar_shalvar INT(100) NOT NULL," +
            "andaza_basan INT(100) NOT NULL," +
            "andaza_ran INT(100) NOT NULL," +
            "andaza_zanoo INT(100) NOT NULL," +
            "andaza_dampa INT(100) NOT NULL," +
            "andaza_fagh INT(100) NOT NULL" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table pant_order successfully ...!!!") : console.log("error create table Regester ...!!!", value_create_regeste_table)
        })
    }


    static CREATE_TABALE_LOGIN_ADMIN = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS admin_login (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "username VARCHAR(100) NOT NULL," +
            "password VARCHAR(100) NOT NULL" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table admin_login successfully ...!!!") : console.log("error create table Regester ...!!!", value_create_regeste_table)
        })
    }


    static CREATE_TABALE_ROUT_ADMIN_ADD_PRODUCT = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS add_product (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "name_product VARCHAR(100) NOT NULL," +
            "price_product VARCHAR(100) NOT NULL," +
            "color_suit VARCHAR(100) NOT NULL," +
            "fabric_material VARCHAR(100) NOT NULL," +
            "discription_product VARCHAR(100) NOT NULL," +
            "uploadfile VARCHAR(500) NOT NULL" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table add_product successfully ...!!!") : console.log("error create table Regester ...!!!", value_create_regeste_table)
        })
    }


    static CREATE_TABALE_ROUT_CONTACT_ME = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS contact_me (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "phone_number VARCHAR(100) NOT NULL," +
            "Email_address VARCHAR(100) NOT NULL," +
            "discreption VARCHAR(100) NOT NULL" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table contact_me successfully ...!!!") : console.log("error create table contact_me ...!!!", value_create_regeste_table)
        })
    }


    static CREATE_TABALE_PROFILE_USER = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS profile_user (" +
            "id VARCHAR(100) PRIMARY KEY NOT NULL, " +
            "username VARCHAR(50) NOT NULL," +
            "password VARCHAR(255) NOT NULL," +
            "phonenumber VARCHAR(20)," +
            "email VARCHAR(100)," +
            "Address VARCHAR(100)," +
            "Pstal_Address VARCHAR(100)" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table profile_user successfully ...!!!") : console.log("error create table profile_user ...!!!", value_create_regeste_table)
        })
    }


    static CREATE_TABALE_COMMENT_PRODUCT = async () => {

        All_create_dependencis_class.query("CREATE TABLE IF NOT EXISTS comment_product (" +
            "id VARCHAR(100) NOT NULL, " +
            "comment VARCHAR(255) NOT NULL" +
            ")"
        ).then((value_create_regeste_table) => {
            value_create_regeste_table[0].fieldCount === 0 ? console.log("create Table comment_product successfully ...!!!") : console.log("error create table comment_product ...!!!", value_create_regeste_table)
        })
    }






    static Close_DB = async () => {
        if (All_create_dependencis_class.#pool) {
            await All_create_dependencis_class.#pool.end();
            console.log('Database connection closed');
        }
    }

}

module.exports = { All_create_dependencis_class }